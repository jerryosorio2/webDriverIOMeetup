describe("WebDriverIO basic examples", () => {
  it("Load Example Website", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");
    await browser.pause(3000);
  });

  it("Assert Url", async () => {
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login");
  });

  it("Assert Title", async () => {
    await expect(browser).toHaveTitle("The Internet");
  });

  it("Assert Links", async () => {
    const linkElement = await $('//div[@id="page-footer"]//a');
    await expect(linkElement).toHaveLink("http://elementalselenium.com/");
  });

  it("Assert Links Text", async () => {
    const linkElement = await $('//div[@id="page-footer"]//a');
    await expect(linkElement).toHaveText("Elemental Selenium");
  });
});
