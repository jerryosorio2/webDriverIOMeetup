describe("webdrive.io page", () => {
  it("should have the right tile", async () => {
    await browser.url("https://webdriver.io");
    await expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  });
});
