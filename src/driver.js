  import webdriver from 'selenium-webdriver';
  import fs from 'fs';
  import config from './config';

  export function getDriver() {
    return new webdriver.Builder().forBrowser(config.browser).build();
  }

  export function saveScreenshot(webdriver, filename) {
    return webdriver.takeScreenshot().then((data) => {
      fs.writeFile(filename, data, 'base64', (err) => {
        if (err) {
          console.log("error", err)
        }; // continue without taking screenshot
      });
    });
  }

  export function writeScreenshot(data, name) {
    name = name || 'ss.png';
    fs.writeFileSync(name, data, 'base64');
  };
  
  