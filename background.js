chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = { txt: "execute extension" };
  console.log("Executing: AliExpress Scraper");
  chrome.tabs.sendMessage(tab.id, msg);
}
