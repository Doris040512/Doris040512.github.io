import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("project discovery, search, filters, detail navigation and reload", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.locator(".project-card")).toHaveCount(5);
  await page
    .getByRole("link", { name: "Explore my work", exact: true })
    .click();
  await expect(page.locator(".project-card")).toHaveCount(7);
  await page.getByRole("button", { name: "Statistics", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(3);
  await page.getByLabel("Search projects").fill("bootstrap");
  await expect(page.locator(".project-card")).toHaveCount(1);
  await page.getByLabel("Search projects").fill("missing-tool");
  await expect(
    page.getByRole("heading", { name: "No projects found." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.locator(".project-card")).toHaveCount(7);
  for (const id of [
    "lost-in-the-middle",
    "housing-uncertainty",
    "retail-analytics",
    "feedback-builder",
    "influenza-seasonality",
    "causal-sensitivity",
    "covid-demographics",
  ]) {
    await page.goto("/#/projects/" + id);
    await expect(
      page.getByRole("heading", { name: "Recorded results" }),
    ).toBeVisible();
  }
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Recorded results" }),
  ).toBeVisible();
  await expect(page.locator(".detail-links a").first()).toHaveAttribute(
    "href",
    /github.com\/Doris040512\//,
  );
  expect(errors).toEqual([]);
});

test("theme, mobile menu, responsive layout and image loading", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(page.getByLabel("Search projects")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/#/", "/#/projects", "/#/projects/feedback-builder"]) {
      await page.goto(path);
      await page.getByRole("heading", { level: 1 }).waitFor();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
  }
  await page.goto("/#/projects/influenza-seasonality");
  const image = page.locator("img");
  await image.scrollIntoViewIfNeeded();
  await expect(image).toBeVisible();
  await expect
    .poll(() => image.evaluate((el: HTMLImageElement) => el.naturalWidth))
    .toBeGreaterThan(0);
  await page.goto("/#/missing");
  await expect(
    page.getByRole("heading", { name: "Page not found." }),
  ).toBeVisible();
});

test("automated accessibility on key routes in both themes", async ({
  page,
}) => {
  for (const theme of ["light", "dark"]) {
    await page.goto("/");
    await page.evaluate((value) => localStorage.setItem("theme", value), theme);
    await page.reload();
    for (const path of [
      "/#/",
      "/#/projects",
      "/#/projects/lost-in-the-middle",
    ]) {
      await page.goto(path);
      await page.getByRole("heading", { level: 1 }).waitFor();
      await page.waitForTimeout(900);
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(result.violations).toEqual([]);
    }
  }
});
