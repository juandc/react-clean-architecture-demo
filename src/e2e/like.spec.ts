import { test, expect } from '@playwright/test';
 
test('should like, save in /liked and dislike', async ({ page }) => {
  const wait = ms => new Promise(resolve => {
    console.log('waiting')
    setTimeout(() => {
      console.log('stop waiting')
      resolve(true)
    }, ms)
  });
  
  // Like
  await page.goto('/');
  await wait(1200);
  await page.locator('//button[contains(@class,"PhotoCard_photobutton_container__like")]').first().click();
  await wait(1200);
  await expect(page.locator('//button[contains(@class,"PhotoCard_photobutton_container__active")]')).toHaveCount(1);
  
  // Saved in /liked
  await page.goto('/liked');
  await expect(page.locator('//div[contains(@class,"PhotoCard_card_container")]')).toHaveCount(1);

  // Dislike
  await page.locator('//button[contains(@class,"PhotoCard_photobutton_container__like")]').first().click();
  await wait(1200);
  await expect(page.locator('//div[contains(@class,"PhotoCard_card_container")]')).toHaveCount(0);

  // Unsaved in /
  await page.goto('/');
  await expect(page.locator('//button[contains(@class,"PhotoCard_photobutton_container__active")]')).toHaveCount(0);
});
