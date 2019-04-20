const default_config = {
  config: {
    status: "enabled"
  }
};
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(default_config, null);
});
