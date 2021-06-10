var minChannelInput = document.querySelector("#input");
minChannelInput.addEventListener("input", (e) => {
    chrome.storage.sync.set({minChannels: parseInt(minChannelInput.value)})
});

chrome.storage.sync.get(["minChannels"], (data) => {
    minChannelInput.value = data.minChannels;    
});