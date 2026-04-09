document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button1");

  button!.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        action: "fillFields"
      });
    }
  });
});