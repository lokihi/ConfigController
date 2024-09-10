const ConfigController = require('../../configController/ConfigController.js');

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

test('test', () => {
    const htmlData = fs.readFileSync('testFiles/IPAddress.html');
    const dom = new JSDOM(htmlData);
    console.log(ConfigController(dom.window.document).GetAllData())
    expect("1826").toBe("1826");
  });
