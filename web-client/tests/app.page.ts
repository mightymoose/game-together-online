import { Locator, Page } from "@playwright/test";

export class AppPage {
  private readonly page: Page;

  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = this.page.getByRole("heading", {
      name: "Game Together Online",
    });
  }

  async goto() {
    await this.page.goto("/");
  }
}
