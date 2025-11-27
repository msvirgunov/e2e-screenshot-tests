const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сторінки Про нас', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page).toHaveTitle(/Про нас/);
});

test('Перевірка наявності опису компанії', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  const description = page.locator('#description');
  await expect(description).toContainText('Ми навчаємось писати автоматичні тести');
});

test('Перевірка навігації на головну сторінку', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  // Клікаємо на посилання
  await page.click('#homeLink');
  // Перевіряємо, що URL змінився на корінь сайту (або index.html)
  // http-server може редиректити на корінь, тому перевіримо частину URL
  // або перевіримо наявність елемента з головної сторінки
  await expect(page.locator('#loginForm')).toBeVisible();
});