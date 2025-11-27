const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сайту Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Перевіряємо, чи є слово Playwright у заголовку
  await expect(page).toHaveTitle(/Playwright/);
});

test('Перевірка наявності меню навігації', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Знаходимо елемент навігації (nav)
  const nav = page.locator('nav');
  // Перевіряємо, чи він видимий
  await expect(nav).toBeVisible();
});

test('Перевірка переходу за посиланням Get started', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Клікаємо на кнопку або посилання з текстом "Get started"
  await page.click('text=Get started');
  // Перевіряємо, чи URL змінився на сторінку документації
  await expect(page).toHaveURL(/docs\/intro/);
});