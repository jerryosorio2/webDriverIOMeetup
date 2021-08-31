describe("Attribute Actions Examples", () => {
  it("Load Example Website", async () => {
    await browser.url("https://the-internet.herokuapp.com/login");
    await browser.pause(3000);
  });

  it("Get element value", async () => {
    const userNameInput = await $('//input[@id="username"]');
    await userNameInput.setValue("My User Name");
    await browser.pause(3000);
    await expect(userNameInput).toHaveValue("My User Name");

    const inputValue = await userNameInput.getValue();
    console.log(inputValue);
  });

  it("Get element attribute", async () => {
    const userNameInput = await $('//input[@id="username"]');
    await expect(userNameInput).toHaveAttrContaining("type", "text");
    const attributeValue = await userNameInput.getAttribute("type");
    console.log(attributeValue);
  });
});
