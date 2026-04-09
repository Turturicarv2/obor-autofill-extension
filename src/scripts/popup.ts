document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.getElementById("button4me");
  const sagnikButton = document.getElementById("button4sagnik");
  const maliiButton = document.getElementById("button4malii");
  const marioButton = document.getElementById("button4mario");


  async function _getCurrentTab() {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    return tab;
  }

  myButton!.addEventListener("click", async () => {
    const tab = await _getCurrentTab();

    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        action: "myFields"
      });
    }
  });

  sagnikButton!.addEventListener("click", async () => {
    const tab = await _getCurrentTab();

    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        action: "sagnikFields"
      });
    }
  });

  maliiButton!.addEventListener("click", async () => {
    const tab = await _getCurrentTab();

    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        action: "maliiFields"
      });
    }
  });

  marioButton!.addEventListener("click", async () => {
    const tab = await _getCurrentTab();

    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        action: "marioFields"
      });
    }
  });
});