describe("Waits Examples", () => {
  it("Load Example Website", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");
    await browser.pause(3000);
  });

  it("Implicit Wait Example", async () => {
    await browser.pause(3000);
    const userNameInput = await $('//input[@id="username"]');
    await browser.pause(3000);
    await userNameInput.setValue("Example with implicit wait");
  });

  it("Explicit Wait Example", async () => {
    const userNameInput = await $('//input[@id="username"]');
    await userNameInput.waitForExist();
    await userNameInput.setValue("Example with explicit wait");
    await browser.pause(3000);
  });
});
