const ConfigController = require('../include/ConfigController.js');
const NewConfigController = require('../include/NewConfigController.js');

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

test('testBool', () =>
{
    const htmlRawData = fs.readFileSync('resources/Bool.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testByteArray', () =>
{
    const htmlRawData = fs.readFileSync('resources/ByteArray.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testConstSelector', () =>
{
    const htmlRawData = fs.readFileSync('resources/ConstSelector.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testConstTable', () =>
{
    const htmlRawData = fs.readFileSync('resources/ConstTable.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testDefaultConfig', () =>
{
    const htmlRawData = fs.readFileSync('resources/DefaultConfig.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testElementDouble', () =>
{
    const htmlRawData = fs.readFileSync('resources/ElementDouble.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testElementInt32', () =>
{
    const htmlRawData = fs.readFileSync('resources/ElementInt32.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testElementString', () =>
{
    const htmlRawData = fs.readFileSync('resources/ElementString.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testElementUInt32', () =>
{
    const htmlRawData = fs.readFileSync('resources/ElementUInt32.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testFlag', () =>
{
    const htmlRawData = fs.readFileSync('resources/Flag.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testGroup', () =>
{
    const htmlRawData = fs.readFileSync('resources/Group.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testGroupWithSelector', () =>
{
    const htmlRawData = fs.readFileSync('resources/GroupWithSelector.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;    
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testGroupWithTable', () =>
{
    const htmlRawData = fs.readFileSync('resources/GroupWithTable.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testInt32', () =>
{
    const htmlRawData = fs.readFileSync('resources/Int32.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testIPAddress', () =>
{
    const htmlRawData = fs.readFileSync('resources/IPAddress.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testIPAddressMask', () =>
{
    const htmlRawData = fs.readFileSync('resources/IPAddressMask.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;

    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testNestedGroup', () =>
{
    const htmlRawData = fs.readFileSync('resources/NestedGroup.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testNestedSelector', () =>
{
    const htmlRawData = fs.readFileSync('resources/NestedSelector.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testNestedTable', () =>
{
    const htmlRawData = fs.readFileSync('resources/NestedTable.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testNumericInt32', () =>
{
    const htmlRawData = fs.readFileSync('resources/NumericInt32.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testNumericRangeInt32', () =>
{
    const htmlRawData = fs.readFileSync('resources/NumericRangeInt32.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;

    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testNumericRangeUInt32', () =>
{
    const htmlRawData = fs.readFileSync('resources/NumericRangeUInt32.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testNumericUInt32', () =>
{
    const htmlRawData = fs.readFileSync('resources/NumericUInt32.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testPath', () =>
{
    const htmlRawData = fs.readFileSync('resources/Path.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testPort', () =>
{
    const htmlRawData = fs.readFileSync('resources/Port.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testSelectorWithGroup', () =>
{
    const htmlRawData = fs.readFileSync('resources/SelectorWithGroup.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testSelectorWithTable', () =>
{
    const htmlRawData = fs.readFileSync('resources/SelectorWithTable.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testTable', () =>
{
    const htmlRawData = fs.readFileSync('resources/Table.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testTableWithGroup', () =>
{
    const htmlRawData = fs.readFileSync('resources/TableWithGroup.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testTableWithSelector', () =>
{
    const htmlRawData = fs.readFileSync('resources/TableWithSelector.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).toStrictEqual(origin);
});

test('testText', () =>
{
    const htmlRawData = fs.readFileSync('resources/Text.html');
    const htmlDocument = new JSDOM(htmlRawData).window.document;
    
    const origin = ConfigController(htmlDocument).GetAllData();
    const result = NewConfigController(htmlDocument).GetAllData();
    
    expect(result).not.toEqual('');

    expect(result).not.toEqual('');
    
    expect(result).toStrictEqual(origin);
});
