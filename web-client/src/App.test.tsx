import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { AppPage } from './App.page';

describe("<App />", () => {
    const page = new AppPage();

    it("shows the heading", () => {
        page.render();
        expect(page.heading).toBeInTheDocument();
    });
});