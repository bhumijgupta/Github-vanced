const defaultConfig = {
  config: {
    contri: "enabled",
    darkmode: "enabled"
  }
};
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(defaultConfig, null);
});