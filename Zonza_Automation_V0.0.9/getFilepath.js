var clientname = document.querySelector("#root > div.asset > div.asset-body > div.Tab > div > div.metadata > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div.field-value.col-md-12.col-lg-10.col > p").textContent;
var fidoNumber= document.querySelector("#root > div.asset > div.asset-body > div.Tab > div > div.metadata > div > div:nth-child(1) > div.metadata-field.container > div > div.field-value.col-md-12.col-lg-10.col > p").textContent;
var companyName=document.querySelector("#root > div.asset > div.asset-body > div.Tab > div > div.metadata > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div.field-value.col-md-12.col-lg-10.col > p").textContent;
var serverList =["Amazon_Prime","Bayer","Bayer_Animal_Health","Bose","CandA","Castrol","Coca_Cola","convatec","Coty","DAZN","DHL","Duracell","Dyson Ltd","EA_Games","Elanco_Animal_Health","ELEMENT","Essilor","Facebook","General_Mills","Google","GSK","Heinz","HSBC","Hills","HSBC_Grey","IBM","IBM_Ogilvy","IHG","Internal_Ogilvy","Johnson_and_Johnson","King","Kingfisher","Loreal","Marriott","Mattel","McCormick","Meetic","Meta","Nespresso","Nestle","Nestle_Baby_Foods","Nestle_Chocolate_and_Confectionary","Nomad","P_and_G","Pernod_Ricard","Pfizer","Philip_Morris_International","Philips","Reckitt_Benckiser","Ricola","Rolex","Sage","Sainsburry","Sanofi","Scholl_SWC","SingTel","Skechers","Starbucks","TCCC","TJX","Tudor","Unilever","Velux","vodafone","Volkswagen_Canada","Zippo_OGP","Zumba_Fitness","Zurich","Bayer"];
var zonzaList =["Amazon Prime","Bayer Consumer","Bayer Animal Health","Bose","C&A","Castrol","Coca-Cola","ConvaTec","Coty","DAZN","DHL","Duracell","Dyson","EA Games","Elanco Animal Health","Element","Essilor","Facebook","General Mills","Google","GSK","Heinz","HSBC","Hills","HSBC_GRY","IBM","IBM - Ogilvy","IHG","Internal - Ogilvy","J&J","King","Kingfisher","L’Oreal – Wavemaker","Marriott","Mattel","McCormick & Company, Inc - GRY","Meetic","Meta","Nespresso","Nestle","Nestle - Baby Foods","Nestle - Chocolate & Confectionary","Nomad","P&G","Pernod Ricard","Pfizer","Philip Morris International","Philips","Reckitt Benckiser","Ricola","Rolex","Sage","Sainsburys - Ogilvy","Sanofi","Scholl SWC","SingTel","Skechers","Starbucks","TCCC","TJX","Tudor","Unilever","Velux","Vodafone","Volkswagen","Zippo - OGP","Zumba Fitness","Zurich - 72andSunny","Bayer Pharma"];

var findCompany;

for (let i =0;i<zonzaList.length;i++){
  if (zonzaList[i]== companyName){
   var getcompname= serverList[i];
   console.log(getcompname);
   findCompany=[];
   var findCompany=getcompname;
  }
}

var numSplit=fidoNumber.split("_");
var hNum =numSplit[0];
var bNum = numSplit[1];

 var macPath = "ocp://hgpc-nas.hogarthww.prv/HGPC_Broadcast_Sync/ProjectMedia/HGPC/"+findCompany+"/"+ hNum+"/";
console.log(macPath);

 chrome.storage.sync.set({ "macpathdisplay" : macPath }, function() {
    console.log(macPath);
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  }); 