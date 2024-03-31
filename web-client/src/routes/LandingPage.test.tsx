import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { LandingPagePage } from './LandingPage.page';

describe("<LandingPage />", () => {
    const page = new LandingPagePage();

    it("shows the heading", () => {
        page.render();
        expect(page.heading).toBeInTheDocument();
    });
});