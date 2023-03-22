  chrome.storage.local.get("data", function(items) {
      if (!chrome.runtime.error) {
        console.log(items);
        document.getElementById("entertext").innerHTML = items.data;
      }
      changeplural();
      chrome.storage.local.remove("data");
      chrome.storage.sync.clear();

    });

      
  
function changeplural(){
    var changetext = document.getElementById("pluraltext");
    var count = document.querySelectorAll("#counttext").length;
    console.log(count);
        if(count==1){
            changetext.innerHTML="The File is Finished and Uploaded to Zonza, Please Check it.";
            console.log("single");
        }
        if(count>1){
          changetext.innerHTML="The Files are Finished and Uploaded to Zonza, Please Check it.";
          console.log("plural");
        }
      
    }