function insertScript() {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files:['content.js']});
  })
};

document.getElementById('fillbutton').addEventListener('click', insertScript);
document.getElementById('fillbulkbutton').addEventListener('click', insertBulkScript);

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const activeTab = document.getElementById("Easy");
const nonActiveTab =document.getElementById("Hard");
tabs.forEach(tab =>{
  
tab.addEventListener('click',() =>{
  const target = document.querySelector(tab.dataset.tabTarget)
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
    activetabFinder();
   
  })
target.classList.add('active')
activetabFinder();
})
})

function activetabFinder(){
  const easy = document.getElementById('switcheasy');
  const Hard = document.getElementById('switchhard');
 if (activeTab.classList.contains('active')){
easy.classList.add('active');
Hard.classList.remove('active');
 }
 if (nonActiveTab.classList.contains('active')){
  easy.classList.remove('active');
  Hard.classList.add('active');
   }

}

function insertBulkScript() {
  chrome.tabs.query({lastFocusedWindow: true}, tabs => {
    for (var i = 0; i < tabs.length; i++) {
  chrome.scripting.executeScript({target: {tabId: tabs[i].id}, files:['content.js']});
    }
  })
};