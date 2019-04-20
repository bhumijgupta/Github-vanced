const defaultConfig = {
  config: {
    status: "enabled"
  }
};
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(defaultConfig, null);
});