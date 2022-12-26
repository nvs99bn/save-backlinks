document.getElementById("start").onclick = async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["scripts/start.js"],
    });
  });
};