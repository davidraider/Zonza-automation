var textName = document.querySelector("#root > div.asset > div.asset-header > div.asset-title-row > h1").textContent;
var textURL = document.URL;
var fido_number=document.querySelector("#root > div.asset > div.asset-body > div.Tab > div > div.metadata > div > div:nth-child(1) > div.metadata-field.container > div > div.field-value.col-md-12.col-lg-10.col > p").textContent;
var myArr = [];

myArr.push(textName,textURL,fido_number);
chrome.runtime.sendMessage({
    action: "getSource",
    source: myArr
});

