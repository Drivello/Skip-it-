chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === "complete") {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: () => {
                if (window.location.href.includes("www.youtube.com/watch")) {
                    console.log("Checking for ads...");
                    setInterval(function () {
                        var skipButton = document.querySelector(
                            ".ytp-ad-skip-button"
                        );
                        if (skipButton) {
                            skipButton.click();
                        }
                    }, 500);
                }
            },
        });
    }
});
