document.getElementById("start").onclick = async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["scripts/index.js"],
    });
  });
};

document.getElementById("clear").onclick = async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["scripts/clearData.js"],
    });
  });
};

document.getElementById("download").onclick = async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["scripts/download.js"],
    });
  });
};