class App {
  async open(path) {
    await browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}

export default new App();
