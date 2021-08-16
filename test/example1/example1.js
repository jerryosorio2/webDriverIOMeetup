describe("webdrive.io page", () => {
  it("should have the right tile", () => {
    browser.url("https://webdriver.io");
    expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  });
});
