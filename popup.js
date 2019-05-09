contriBtn = document.querySelector("#contri input");
darkBtn = document.querySelector("#darkmode input");
githubBtn = document.querySelector("button");
var contriStatus = "disabled";
var darkStatus = "disabled";

// checking current status of extension
chrome.storage.sync.get(["config"], (result) => {
    if (result.config.contri === "enabled") {
        // if enabled then check the toggle
        contriBtn.checked = true;
        contriStatus = "enabled";
    }
    if (result.config.darkmode === "enabled") {
        // if enabled then check the toggle
        darkBtn.checked = true;
        darkStatus = "enabled";
    }
})

contriBtn.addEventListener("click", () => {
    // disable toggle untill operation completes
    contriBtn.disabled = true;

    // toggle states
    if (contriStatus === "enabled") {
        contriBtn.checked = false;
        contriStatus = "disabled";
    } else {
        contriBtn.checked = true;
        contriStatus = "enabled";
    }

    chrome.storage.sync.set({
        config: {
            contri: contriStatus,
            darkmode: darkStatus
        }
    }, () => {
        // enable button when operation completes
        contriBtn.disabled = false;
    })
});

darkBtn.addEventListener("click", () => {
    // disable toggle untill operation completes
    darkBtn.disabled = true;
    // toggle states
    if (darkStatus === "enabled") {
        darkBtn.checked = false;
        darkStatus = "disabled";
    } else {
        darkBtn.checked = true;
        darkStatus = "enabled";
    }

    chrome.storage.sync.set({
        config: {
            contri: contriStatus,
            darkmode: darkStatus
        }
    }, () => {
        // enable button when operation completes
        darkBtn.disabled = false;
    })
});

githubOpen = () => {
    let newUrl = "https://github.com/bhumijgupta/Github-vanced"
    chrome.tabs.create({
        url: newUrl
    });
}

githubBtn.addEventListener("click", () => {
    githubOpen();
})