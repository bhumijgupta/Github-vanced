btn = document.querySelector(".switch input");
var curStatus = "disabled";

// checking current status of extension
chrome.storage.sync.get(['config'], (result) => {
    if (result.config.status == "enabled") {
        // if enabled then check the toggle
        btn.checked = true;
        curStatus = "enabled";
    }
})

btn.addEventListener("click", () => {
    // disable toggle untill operation completes
    btn.disabled = true;

    // toggle states
    if (curStatus == "enabled") {
        btn.checked = false;
        curStatus = "disabled";
    } else {
        btn.checked = true;
        curStatus = "enabled";
    }

    chrome.storage.sync.set({
        config: {
            status: curStatus
        }
    }, () => {
        // enable button when operation completes
        btn.disabled = false;
    })
})