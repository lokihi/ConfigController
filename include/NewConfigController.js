const CustomParamAttributes = require('../include/CustomParamAttributes.js');

const NewConfigController = function(parentElement)
{

// private

const _parentElement = parentElement;


const GetNestedElementValue = function(parentElement)
{
	var values = [];
	for (const child of parentElement.children)
		{
			if (child.hasAttribute(CustomParamAttributes.IParamValue))
			{
				values.push(GetValue(child));
			}
			else
			{
				const nestedValues = GetNestedElementValue(child);
				if (nestedValues!==null)
				{
					if (Array.isArray(nestedValues) && nestedValues.length===1)
					{
						values = values.concat(nestedValues);
					}
					else if (child.hasAttribute(CustomParamAttributes.INestedParam))
					{
						values.push(nestedValues);
					}
					else
					{
						values = values.concat(nestedValues);
					}
				}
			}
	}
	if (values.length!==0)
	{
		return values;
	}
	else
	{
		return null;
	}
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

const GetUidToValues = function(parentElement)
{
	const uidToValues = {};
	const elements = parentElement.querySelectorAll("[" + CustomParamAttributes.IParamUid + "]");

	elements.forEach(function (element)
	{
		var uid = element.getAttribute(CustomParamAttributes.IParamUid);
		if (!uidToValues[uid])
		{
			uidToValues[uid] = [];
		}
		if (element.hasAttribute(CustomParamAttributes.IParamValue))
		{
			uidToValues[uid].push(GetValue(element));
		}
		else if (element.hasAttribute(CustomParamAttributes.INestedParam))
		{
			uidToValues[uid].push(GetNestedElementValue(element));
		}
	});

	return uidToValues;
}

// public

let self = {};

self.GetAllData = function()
{
	return GetUidToValues(_parentElement);
}

return self;

}; // NewConfigController

module.exports = NewConfigController;
