chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "fillFields") {
    fillRandomData();
  }
});

function fillRandomData() {
  const randomString = () =>
    Math.random().toString(36).substring(2, 8);

  const inputs = document.querySelectorAll<HTMLInputElement>("input");

  inputs.forEach((input) => {
    if (input.type === "text" || input.type === "email") {
      input.value = randomString();
    }
  });

  console.log("Fields filled!");
}