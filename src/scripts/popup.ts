document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button4me");

  button!.addEventListener("click", async () => {
    // get current tab
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (tab?.id) {
      // send message to worker script
      chrome.tabs.sendMessage(tab.id, {
        action: "fillFields"
      });
    }
  });
});