const { test, expect } = require('@playwright/test');

test('Перевірка змін сторінки за скриншотом', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // Робимо скріншот і порівнюємо з файлом 'index-page.png'
  expect(await page.screenshot()).toMatchSnapshot('index-page.png');
});

test('Порівняння скриншота елемента', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // Знаходимо заголовок h1
  const element = page.locator('h1');
  // Робимо скріншот тільки цього елемента
  expect(await element.screenshot()).toMatchSnapshot('index-page-element-h1.png');
});