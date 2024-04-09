import { Locator, Page } from "@playwright/test";

export class AppPage {
  private readonly page: Page;

  readonly heading: Locator;
  readonly connectedIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = this.page.getByRole("heading", {
      name: "Game Together Online",
    });
    this.connectedIcon = this.page.getByLabel("Connected to the server");
  }

  async goto() {
    await this.page.goto("/");
  }
}
