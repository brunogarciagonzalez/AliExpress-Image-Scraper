chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  debugger;
  if (message.txt === "execute extension") {
    let output = [];
    let iterable = document.querySelector(".images-view-list").children;
    for (let i = 0; i < iterable.length; ++i) {
      let currentSrc = iterable[i].querySelector("img").src;
      let moddedSrc = currentSrc.replace("_50x50.jpg", "");
      output.push(moddedSrc);
      window.open(moddedSrc);
    }
    console.log("LINKS: ");
    console.log(output);
  }
}
