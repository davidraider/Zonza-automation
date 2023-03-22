

    var fileName = document.querySelector("#root > div.UploadForm > form > div.field.form-group > div > div:nth-child(2) > div > div.FileStatus > div > span.filename").innerText;
    var fun = document.getElementsByName('hogarthww_title')[0].setAttribute("value",fileName);
  var fileNameSlice = fileName.slice(0,1);
  
  if (fileNameSlice==="B"){
    var bnumCollect = fileName.slice(0,7);
    var setFidoId = document.getElementsByClassName('zonza-input form-control')[0].setAttribute("value",bnumCollect);
  }
  if (fileNameSlice==="H"){
    var bnumCollect = fileName.slice(0,15);
    var setFidoId = document.getElementsByClassName('zonza-input form-control')[0].setAttribute("value",bnumCollect);
  }
    document.querySelector('.zonza-input.form-control').dispatchEvent(new Event('change', { 'bubbles': true }));
    document.getElementsByName('hogarthww_title')[0].dispatchEvent(new Event('change', { 'bubbles': true }));
    document.getElementsByClassName('zonza-button zonza-primary external-metadata-btn btn btn-unset')[0].click();
   
