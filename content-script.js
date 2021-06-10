var minChannels = 0;
var sidebar;    
var showMoreButton;

chrome.storage.sync.get(["minChannels"], (data) => {
    minChannels = data.minChannels;
});

var temp = setInterval(() => {
    sidebar = document.querySelector(".side-bar-contents > div > div > div > .tw-transition-group");
    showMoreButton = document.querySelector(".side-bar-contents > div > div > div > div > button");
    if(sidebar != null && showMoreButton != null) {
        clearInterval(temp);
        startMainLoop();
    }
}, 1000);

function startMainLoop() {
    setInterval(() => {
        chrome.storage.sync.get(["minChannels"], (data) => {
            minChannels = data.minChannels;
        });
    
        if(sidebar.children.length < minChannels) showMoreButton.click();
    }, 3000);    
}