console.log("CONTENT SCRIPT LOADED");

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "fillFields") {
    fillRandomData();
  }
});

function fillRandomData() {
  console.log("Fields filled!");
}