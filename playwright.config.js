import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Папка, де будуть лежати наші тести
  testDir: 'tests',
  
  // Формат звіту про тестування
  reporter: 'html',
  
  use: {
    // Базова адреса для тестів
    baseURL: 'http://localhost:3000',
    // Збирати трейс (лог) при повторному запуску після помилки
    trace: 'on-first-retry',
    // Запускати браузер у "безголовому" режимі (без візуального вікна)
    headless: true,
  },

  // Налаштування браузерів
projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    /* Додаємо мобільний пристрій */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],

  // Запуск локального сервера перед тестами
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});