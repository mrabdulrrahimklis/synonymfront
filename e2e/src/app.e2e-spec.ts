import { AppPage } from "./app.po";
import {browser, logging, by, element} from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual("synonym-angularCLI app is running!");
  });

  it("should show table", () => {
    const table = element(by.id("#table")).isDisplayed();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
