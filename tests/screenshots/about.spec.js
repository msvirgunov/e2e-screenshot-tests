const { test, expect } = require('@playwright/test');

test('Скріншот сторінки Про нас', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  // Робимо повний скріншот сторінки
  expect(await page.screenshot()).toMatchSnapshot('about-page.png');
});

test('Скріншот футера сторінки Про нас', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  // Знаходимо футер
  const footer = page.locator('#footer');
  // Робимо скріншот тільки футера
  expect(await footer.screenshot()).toMatchSnapshot('about-footer.png');
});