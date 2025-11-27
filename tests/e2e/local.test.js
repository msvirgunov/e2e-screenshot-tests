const { test, expect } = require('@playwright/test');

// Тест 1: Перевірка успішного входу
test('Перевірка форми входу', async ({ page }) => {
  // Переходимо на сторінку
  await page.goto('http://localhost:3000');
  
  // Заповнюємо поля
  await page.fill('#username', 'test_user');
  await page.fill('#password', 'password123');
  
  // Натискаємо кнопку
  await page.click('#loginButton');
  
  // Перевіряємо, чи з'явилося повідомлення про успіх
  await expect(page.locator('#successMessage')).toBeVisible();
});

// Тест 2: Перевірка заголовка
test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // Перевіряємо, що в заголовку є текст "Локальна сторінка"
  await expect(page).toHaveTitle(/Локальна сторінка/);
});

// Тест 3: Перевірка валідації (що поля не порожні)
test('Валідація обов\'язкових полів форми', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Натискаємо кнопку, не заповнюючи поля
  await page.click('#loginButton');
  
  // Шукаємо поля, які браузер позначив як невалідні (:invalid)
  const error = await page.evaluate(() => document.querySelector(':invalid'));
  
  // Очікуємо, що такий елемент знайдено (тобто валідація спрацювала)
  expect(error).not.toBeNull();
});