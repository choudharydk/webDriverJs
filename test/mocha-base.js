import { getDriver, saveScreenshot, writeScreenshot } from '../src/driver';
import { rootDir } from '../index';
var path = require('path')
const reportDir = rootDir + path.join('/mochawesome-report/');

export let driver;

beforeEach(function() {
  driver = getDriver();
});

// afterEach(function() {
//   if (this.currentTest.state === 'failed') {
//    let screenshotFile = reportDir+ Date.now() + '.png';
//    this.currentTest.context = 'file:///' + screenshotFile;
//    // return saveScreenshot(driver, screenshotFile)
//    driver.takeScreenshot().then(function(data) {
//     writeScreenshot(data,screenshotFile);
//   });
//       //.then(() => driver.quit());
//   }
//   return driver.quit();
// });

afterEach(function() {
  if (this.currentTest.state === 'failed') {
   let screenshotFile = reportDir+ Date.now() + '.png';
   this.currentTest.context = 'file:///' + screenshotFile;
    return saveScreenshot(driver, screenshotFile)
      .then(() => driver.quit());
  }
  return driver.quit();
});
