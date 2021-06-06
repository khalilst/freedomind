try {
  if (browser === undefined) {
    //Cross-Browser Compatibility
  }
} catch {
  browser = chrome;
}

browser.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  console.log('Load_', changeInfo);
  if (changeInfo.status == 'complete') {

    browser.tabs.executeScript({
      file: 'scripts/linkedin.js',
    });

  }
});
