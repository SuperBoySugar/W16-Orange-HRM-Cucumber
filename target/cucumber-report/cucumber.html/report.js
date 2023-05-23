$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("usertest.feature");
formatter.feature({
  "line": 2,
  "name": "User Test",
  "description": "\r\nAs a user I should able to add user, search created user, delete user and also verify\r\ndeleted user should not available",
  "id": "user-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 2485772200,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 9,
  "name": "User should able add user successfully",
  "description": "",
  "id": "user-test;user-should-able-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I enter User name \"Admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter Password \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify text system user",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify text add user",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on user role",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input Employee name \"Odis Adalwin\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I input user name \"Morris\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select status enable",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I input password field \"SweetPickle99\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I input confirm password field \"SweetPickle99\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify success message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "UserTest.iEnterUserName(String)"
});
formatter.result({
  "duration": 264630500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "UserTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 59812500,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 45885500,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1849622900,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iVerifyTextSystemUser()"
});
formatter.result({
  "duration": 407147000,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnAddButton()"
});
formatter.result({
  "duration": 376784900,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iVerifyTextAddUser()"
});
formatter.result({
  "duration": 190109400,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnUserRole()"
});
formatter.result({
  "duration": 1070321200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Odis Adalwin",
      "offset": 23
    }
  ],
  "location": "UserTest.iInputEmployeeName(String)"
});
formatter.result({
  "duration": 1203437100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Morris",
      "offset": 19
    }
  ],
  "location": "UserTest.iInputUserName(String)"
});
formatter.result({
  "duration": 38918700,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iSelectStatusEnable()"
});
formatter.result({
  "duration": 20042314100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[class] .oxd-grid-item--gutters:nth-of-type(4)[tabindex]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4837d67b48ec6208756b821e385c1f15, findElement {using\u003dcss selector, value\u003d[class] .oxd-grid-item--gutters:nth-of-type(4)[tabindex]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54194}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54194/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4837d67b48ec6208756b821e385c1f15\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.orangehrmlive.demo.utility.Utility.pmClickOnElement(Utility.java:27)\r\n\tat com.orangehrmlive.demo.pages.AdminPage.selectStatus(AdminPage.java:61)\r\n\tat com.orangehrmlive.demo.steps.UserTest.iSelectStatusEnable(UserTest.java:146)\r\n\tat ✽.And I select status enable(usertest.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "SweetPickle99",
      "offset": 24
    }
  ],
  "location": "UserTest.iInputPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SweetPickle99",
      "offset": 32
    }
  ],
  "location": "UserTest.iInputConfirmPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iVerifySuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 241755600,
  "status": "passed"
});
formatter.before({
  "duration": 1534600100,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 26,
  "name": "User should search the created user and verify it",
  "description": "",
  "id": "user-test;user-should-search-the-created-user-and-verify-it",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I enter user name \"Admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify text system user",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I input UserName \"Morris\" into username field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on user role",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I input Employee name \"Odis Adalwin\" into employee name field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select status",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify text record found",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "LoginTest.iEnterUserName(String)"
});
formatter.result({
  "duration": 249330600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 62021800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 36935800,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1936564300,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iVerifyTextSystemUser()"
});
formatter.result({
  "duration": 496452100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Morris",
      "offset": 18
    }
  ],
  "location": "UserTest.iInputUserNameIntoUsernameField(String)"
});
formatter.result({
  "duration": 38342200,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnUserRole()"
});
formatter.result({
  "duration": 20026818800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [00a57f61a65154bbc04d5ce405517f0a, findElement {using\u003dxpath, value\u003d//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54219}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54219/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 00a57f61a65154bbc04d5ce405517f0a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.orangehrmlive.demo.utility.Utility.pmClickOnElement(Utility.java:27)\r\n\tat com.orangehrmlive.demo.pages.AddUserPage.clickOnUserRole(AddUserPage.java:42)\r\n\tat com.orangehrmlive.demo.steps.UserTest.iClickOnUserRole(UserTest.java:52)\r\n\tat ✽.And I click on user role(usertest.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Odis Adalwin",
      "offset": 23
    }
  ],
  "location": "UserTest.iInputEmployeeNameIntoEmployeeNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iSelectStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iVerifyTextRecordFound()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 216811300,
  "status": "passed"
});
formatter.before({
  "duration": 3308237400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 39,
  "name": "User should able to delete the user record successfully",
  "description": "",
  "id": "user-test;user-should-able-to-delete-the-user-record-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "I enter user name \"Admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I enter password \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I verify text system user",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I input UserName \"Morris\" into username field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on user role",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I verify text record found",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on pop up",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I verify delete message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "LoginTest.iEnterUserName(String)"
});
formatter.result({
  "duration": 257786500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 55561100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 50781400,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2197961900,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iVerifyTextSystemUser()"
});
formatter.result({
  "duration": 312663700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Morris",
      "offset": 18
    }
  ],
  "location": "UserTest.iInputUserNameIntoUsernameField(String)"
});
formatter.result({
  "duration": 55876200,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnUserRole()"
});
formatter.result({
  "duration": 20036018400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6c205fafc0954f97dab9447b92563205, findElement {using\u003dxpath, value\u003d//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54241}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54241/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 6c205fafc0954f97dab9447b92563205\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.orangehrmlive.demo.utility.Utility.pmClickOnElement(Utility.java:27)\r\n\tat com.orangehrmlive.demo.pages.AddUserPage.clickOnUserRole(AddUserPage.java:42)\r\n\tat com.orangehrmlive.demo.steps.UserTest.iClickOnUserRole(UserTest.java:52)\r\n\tat ✽.And I click on user role(usertest.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserTest.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iVerifyTextRecordFound()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iClickOnCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iClickOnPopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iVerifyDeleteMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 231232700,
  "status": "passed"
});
formatter.before({
  "duration": 1780542900,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 55,
  "name": "User should able to verify deleted user record",
  "description": "",
  "id": "user-test;user-should-able-to-verify-deleted-user-record",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "I enter user name \"Admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I enter password \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I input UserName \"Morris\" into username field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on user role",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I select status",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "LoginTest.iEnterUserName(String)"
});
formatter.result({
  "duration": 352185400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 51485600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 43815400,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2123347100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Morris",
      "offset": 18
    }
  ],
  "location": "UserTest.iInputUserNameIntoUsernameField(String)"
});
formatter.result({
  "duration": 595640400,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.iClickOnUserRole()"
});
formatter.result({
  "duration": 20010385500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9ec5b647d8dc735ec6b8a9c08e097fb8, findElement {using\u003dxpath, value\u003d//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Vimal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54269}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54269/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9ec5b647d8dc735ec6b8a9c08e097fb8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.orangehrmlive.demo.utility.Utility.pmClickOnElement(Utility.java:27)\r\n\tat com.orangehrmlive.demo.pages.AddUserPage.clickOnUserRole(AddUserPage.java:42)\r\n\tat com.orangehrmlive.demo.steps.UserTest.iClickOnUserRole(UserTest.java:52)\r\n\tat ✽.And I click on user role(usertest.feature:61)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserTest.iSelectStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTest.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 242073600,
  "status": "passed"
});
});