  window.onload= function(){
  
   chrome.storage.sync.remove("macpathdisplay");
   chrome.storage.sync.get("count", function(num) {
    var currentcount = num.count;
    if (typeof currentcount !== "undefined"){
    console.log(currentcount);
    var finalcount = document.querySelector("#countdownplace").innerHTML= currentcount;
    var finalcountbulk = document.querySelector("#countdownplacebulk").innerHTML= currentcount;
    if(typeof currentcount !=="<<<< 0 >>>>"){
      buildbuttonactive();
      scrollon();
      clearbuttonOn();
    }
  }
   });


    chrome.storage.local.get("bgcheck", function(items) {
      var undefinedCheck = items.bgcheck;
      console.log(undefinedCheck);
      if (!chrome.runtime.error && typeof undefinedCheck !== "undefined" && undefinedCheck=="white") {
        changetowhite();
      }
      });
      var emptytext = document.getElementById("getmailtext").innerHTML.length;
      if(!emptytext==0){
      getdatatab();
      
    }
  };

document.getElementById('mailbutton').addEventListener('click', copymail);
document.getElementById('Logobutton').addEventListener('click', changebgmode);
document.getElementById('buildtab').addEventListener('click', newtext);
document.getElementById('getPathButton').addEventListener('click', getFilePath);
document.getElementById('mailbulkbutton').addEventListener('click', copybulkmail);
document.getElementById('buildbulktab').addEventListener('click', newbulktext);
document.getElementById('myBtn').addEventListener('click', scroll);
document.getElementById('mycloseBtn').addEventListener('click', dataclear);

function dataclear(){
  var mailtext = document.getElementById("getmailtext");
  var mailbulktext = document.getElementById("getbulkmailtext");
  mailbulktext.innerHTML="";
  mailtext.innerHTML="";
  var finalcount = document.querySelector("#countdownplace").innerHTML= "<<<< 0 >>>>";
  var finalcountbulk = document.querySelector("#countdownplacebulk").innerHTML= "<<<< 0 >>>>";
  document.getElementById('mailbutton').classList.remove('disable');
  document.getElementById('mailbulkbutton').classList.remove('disable');
  scrolloff();
  buildbuttonoff();
  buildbulkbuttonoff();
  clearbuttonOff();
  chrome.storage.sync.remove("tabdata");
  chrome.storage.sync.remove("count");
}
function clearbuttonOn(){
  var x = document.getElementById("mycloseBtn");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

function clearbuttonOff(){
  var x = document.getElementById("mycloseBtn");
  if (x.style.display === "block") {
    x.style.display = "none";
  }

}

function scrollon(){
var x = document.getElementById("myBtn");
if (x.style.display === "none") {
  x.style.display = "block";
}
}

function scrolloff(){
  var x = document.getElementById("myBtn");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  }

function scroll(){

  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

var activationNum;

  chrome.runtime.onMessage.addListener(function(request, sender) {
    var mailtext = document.getElementById("getmailtext");
    var mailbulktext = document.getElementById("getbulkmailtext");
    if (request.action == "getSource") {
      var fido = request.source[2];
      var textSlice =request.source[0];
      var textUrl = request.source[1];
      var fido = request.source[2];
      var newItem = `<div class ="fileItems">
      <div class = "videoName" id="counttext">Fido_ID: `+fido+`</div>
      <br>
      <div class = "videoName">`+textSlice+`</div>
      <br> 
      <a href= `+textUrl+` class = "mailUrl" >`+textUrl+`</a>
      </div> <br> <div class="videoName" id ="seperatortag">-----------------------------------------------------------</div>`;
    }
      count();
      mailtext.innerHTML += newItem;
      settabdata();
      if (!activationNum === true){
   
      mailbulktext.innerHTML += newItem;  
     }
      
    }
    );

    function count(){
      var countlog = document.querySelector("#countdownplace").innerHTML;
      var countnum =countlog.replace(/\D/g, "");
      var incrementcount = parseInt(countnum,10)+1;
      
      var finalcount = document.querySelector("#countdownplace").textContent="<<<< "+incrementcount+" >>>>";
      var finalcountbulk = document.querySelector("#countdownplacebulk").textContent="<<<< "+incrementcount+" >>>>";
      
      chrome.storage.sync.set({ "count" : finalcount }, function() {
        console.log(finalcount);
        if (chrome.runtime.error) {
          console.log("Runtime error.");
        } 
      });
    }

  function settabdata(){
    var newItem = document.getElementById("getmailtext").innerHTML;

    chrome.storage.sync.set({ "tabdata" : newItem }, function() {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      } 
    }); 
  }
  function getdatatab(){
      var mailtext = document.getElementById("getmailtext");
      var mailbulktext = document.getElementById("getbulkmailtext");
      chrome.storage.sync.get("tabdata", function(items) {
      var undefinedCheck = items.tabdata;
      if (!chrome.runtime.error && typeof undefinedCheck !== "undefined") {
        mailtext.innerHTML = items.tabdata;
       
      }
    });
  }

  function copymail() {
    
    var activationNum = false;
    console.log(activationNum+"easy");
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      
      chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files:['Copyscript.js']});
      })
      buildbuttonactive();
      document.getElementById('mailbutton').classList.add('disable');
      scrollon();
      clearbuttonOn();
    };

  function changebgmode(){
    var element=document.body;
    var textlogo=document.getElementById('changetext');
    if (element.classList.contains('Bodycolorblack')) {
      element.classList.remove('Bodycolorblack');
      element.classList.add('Bodycolorwhite');
      textlogo.style.color = '#000';
      var boxbg =document.querySelectorAll('.colorblack');
      for(var i = 0; i < boxbg.length; i++) {
        boxbg[i].classList.toggle('colorwhite',true);
        boxbg[i].classList.toggle('colorblack',false);
      }
      var titletext =document.querySelectorAll('.Subtitle');
      for(var i = 0; i < titletext.length; i++) {
        titletext[i].style.color='#000';
      }
      var buildtext =document.querySelectorAll('.mailtext');
      for(var i = 0; i < buildtext.length; i++) {
        buildtext[i].style.color='#000';
      }
      var mactext =document.querySelectorAll('.Macpath');
      for(var i = 0; i < mactext.length; i++) {
        mactext[i].style.color='#000';
      }
      var tabstext =document.querySelectorAll('.tabs');
      for(var i = 0; i < tabstext.length; i++) {
        tabstext[i].style.color='#000';
      }

      var bgdatavalue = "white"
      chrome.storage.local.set({ "bgcheck" : bgdatavalue }, function() {
        
      }); 
    }
    else {
      element.classList.remove('Bodycolorwhite');
      element.classList.add('Bodycolorblack');
      textlogo.style.color = '#fff';
      var boxbg =document.querySelectorAll('.colorwhite');
      for(var i = 0; i < boxbg.length; i++) {
        boxbg[i].classList.toggle('colorblack',true);
        boxbg[i].classList.toggle('colorwhite',false);
      }
      var titletext =document.querySelectorAll('.Subtitle');
      for(var i = 0; i < titletext.length; i++) {
        titletext[i].style.color='#fff';
      }
      var buildtext =document.querySelectorAll('.mailtext');
      for(var i = 0; i < buildtext.length; i++) {
        buildtext[i].style.color='#fff';
      }
      var mactext =document.querySelectorAll('.Macpath');
      for(var i = 0; i < mactext.length; i++) {
        mactext[i].style.color='#fff';
      }
      var tabstext =document.querySelectorAll('.tabs');
      for(var i = 0; i < tabstext.length; i++) {
        tabstext[i].style.color='#fff';
      }
      chrome.storage.local.clear();
      var bgdatavalue = "black"
      chrome.storage.local.set({ "bgcheck" : bgdatavalue }, function() {
       
      }); 
    }

  }
    
  function buildbuttonactive() {
  var x = document.getElementById("buildbutton");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  
  }
  function buildbulkbuttonactive() {
    var x = document.getElementById("buildbulkbutton");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    
    }

    function buildbuttonoff() {
      var x = document.getElementById("buildbutton");
      if (x.style.display === "block") {
        x.style.display = "none";
      }
      
      }
      function buildbulkbuttonoff() {
        var x = document.getElementById("buildbulkbutton");
        if (x.style.display === "block") {
          x.style.display = "none";
        }
        
        }

  function buildnewtab(){
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.create({'url':"/newtab.html"},function(tab) { 
        chrome.tabs.executeScript({target: {tabId: tabs[0].id}, files:['newtabscript.js']});
      });
      });



  }

  function newtext(){
    var d = document.querySelector('.mailtext').innerHTML;
      chrome.storage.local.set({ "data" : d }, function() {
        if (chrome.runtime.error) {
          console.log("Runtime error.");
        }
      }); 
      buildnewtab(); 
  }

  function newbulktext(){
    var d = document.getElementById("getbulkmailtext").innerHTML;
      chrome.storage.local.set({ "data" : d }, function() {
        if (chrome.runtime.error) {
          console.log("Runtime error.");
        }
      }); 
      buildnewtab(); 
  }

  function getFilePath(){
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files:['getFilepath.js']});
      })
      recallfilepath();


  }

  function recallfilepath(items){
   
    chrome.storage.sync.get("macpathdisplay", function(items) {

      var undefinedCheck=items.macpathdisplay;
    console.log(undefinedCheck);
      if(!chrome.runtime.error && typeof undefinedCheck !== "undefined"){
      document.getElementById('macpathdisplay').innerHTML = items.macpathdisplay;
      document.getElementById('getPathButton').id='openPathbutton';
      document.getElementById('openPathbutton').textContent="GO!!!";
      
      document.getElementById('openPathbutton').addEventListener('click', macPathOcp);
      document.getElementById('openPathbutton').id='getPathButton';
      
      
      }
      else{
        getFilePath();
      }
      
    });
    
    }

  function macPathOcp(){
    var path = document.querySelector("#macpathdisplay").textContent;
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.create({'url':path},function() { 
      });
      });
      
  }

  function changetowhite(){

    var element=document.body;
   
    var textlogo=document.getElementById('changetext');
    if (element.classList.contains('Bodycolorblack')) {
     
      element.classList.remove('Bodycolorblack');
      element.classList.add('Bodycolorwhite');
      textlogo.style.color = '#000';
      var boxbg =document.querySelectorAll('.colorblack');
      for(var i = 0; i < boxbg.length; i++) {
        boxbg[i].classList.toggle('colorwhite',true);
        boxbg[i].classList.toggle('colorblack',false);
      }
      var titletext =document.querySelectorAll('.Subtitle');
      for(var i = 0; i < titletext.length; i++) {
        titletext[i].style.color='#000';
      }
      var buildtext =document.querySelectorAll('.mailtext');
      for(var i = 0; i < buildtext.length; i++) {
        buildtext[i].style.color='#000';
      }
      var mactext =document.querySelectorAll('.Macpath');
      for(var i = 0; i < mactext.length; i++) {
        mactext[i].style.color='#000';
      }
      var tabstext =document.querySelectorAll('.tabs');
      for(var i = 0; i < tabstext.length; i++) {
        tabstext[i].style.color='#000';
      }
    }

  }

  function changetoblack(){
    var element=document.body;
   
    var textlogo=document.getElementById('changetext');
   
    element.classList.remove('Bodycolorwhite');
    element.classList.add('Bodycolorblack');
    textlogo.style.color = '#fff';
    var boxbg =document.querySelectorAll('.colorwhite');
    for(var i = 0; i < boxbg.length; i++) {
      boxbg[i].classList.toggle('colorblack',true);
      boxbg[i].classList.toggle('colorwhite',false);
    }
    var titletext =document.querySelectorAll('.Subtitle');
    for(var i = 0; i < titletext.length; i++) {
      titletext[i].style.color='#fff';
    }
    var buildtext =document.querySelectorAll('.mailtext');
    for(var i = 0; i < buildtext.length; i++) {
      buildtext[i].style.color='#fff';
    }
    var buildtext =document.querySelectorAll('.mailtext');
      for(var i = 0; i < buildtext.length; i++) {
        buildtext[i].style.color='#fff';
      }
      var mactext =document.querySelectorAll('.Macpath');
      for(var i = 0; i < mactext.length; i++) {
        mactext[i].style.color='#fff';
      }
      var tabstext =document.querySelectorAll('.tabs');
      for(var i = 0; i < tabstext.length; i++) {
        tabstext[i].style.color='#fff';
      }
  }

  function copybulkmail() {
    
    var activationNum = true;
    console.log(activationNum+"hard");
    chrome.tabs.query({lastFocusedWindow: true}, tabs => {
      for (var i = 0; i < tabs.length; i++) {
      chrome.scripting.executeScript({target: {tabId: tabs[i].id}, files:['Copyscript.js']});
      }
      })
      buildbulkbuttonactive();
      document.getElementById('mailbulkbutton').classList.add('disable');
      scrollon();
      clearbuttonOn();
    };
   
  