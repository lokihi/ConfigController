const CustomParamAttributes = require('../include/CustomParamAttributes.js');

const ConfigController = function(parentElement)
{

// private

const _parentElement = parentElement;

const GetUidToElements = function(parentElement)
{
	const uidToElements = {};
	const elements = parentElement.querySelectorAll("[" + CustomParamAttributes.IParamUid + "]");
	elements.forEach(function (element)
	{
		var uid = element.getAttribute(CustomParamAttributes.IParamUid);
		if (!uidToElements[uid])
		{
			uidToElements[uid] = [];
		}
		uidToElements[uid].push(element);
	});
	return uidToElements;
}

const GetElementsStructure = function(parentElement)
{
	const childElements = [];
	for (const child of parentElement.children)
	{
		if (child.hasAttribute(CustomParamAttributes.IParamValue))
		{
			childElements.push([ child, [] ]);
		}
		else
		{
			const nestedChildElement = GetElementsStructure(child);
			if (nestedChildElement != null)
			{
				if (child.hasAttribute(CustomParamAttributes.INestedParam))
					childElements.push([ child, nestedChildElement ]);
				else
					childElements.push([ null, nestedChildElement ]);
			}
		}
	}
	if (childElements.length == 0)
		return null;
	return childElements;
}

const GetValue = function(element)
{
	const tagName = element.tagName.toLowerCase();
	if (tagName == "input")
	{
		if (element.type.toLowerCase() === "checkbox")
			return String(element.checked);
		if (element.inputMode.toLowerCase() === "numeric")
			return element.value.replace(/[^0-9\-]/g, "");
		return String(element.value);
	}
	else if (tagName == "select")
	{
		return [
			String(element.selectedIndex),
			element.options[element.selectedIndex].text
		];
	}
	return null;
}

const GetValuesFromElementStructure = function(elementsToStructures)
{
	const values = [];
	for (const [element, structure] of elementsToStructures)
	{
		const elementHasValue = (element != null && element.hasAttribute(CustomParamAttributes.IParamValue));
		if (elementHasValue)
		{
			values.push(GetValue(element));
		}
		else
		{
			const elementValues = GetValuesFromElementStructure(structure);
			if (elementValues != null)
			{
				if (element != null)
				{
					values.push(elementValues);
				}
				else
				{
					for (const value of elementValues)
						values.push(value);
				}
			}
		}
	}
	return values;
}

const GetUidToValues = function(parentElement)
{
	const uidToValues = {};
	const uidToElements = GetUidToElements(parentElement);
	for (const uid in uidToElements)
	{
		if (!uidToValues[uid])
		{
			uidToValues[uid] = [];
		}
		for (const element of uidToElements[uid])
		{
			if (element.hasAttribute(CustomParamAttributes.IParamValue))
			{
				uidToValues[uid].push(GetValue(element));
			}
			else if (element.hasAttribute(CustomParamAttributes.INestedParam))
			{
				const elementStructure = GetElementsStructure(element);
				if (elementStructure == null)
				{
					uidToValues[uid].push([]);
				}
				else
				{
					uidToValues[uid].push(GetValuesFromElementStructure(elementStructure));
				}
			}
		}
	}
	return uidToValues;
}

// public

let self = {};

self.GetAllData = function()
{
	return GetUidToValues(_parentElement);
}

return self;

}; // ConfigController

module.exports = ConfigController;
