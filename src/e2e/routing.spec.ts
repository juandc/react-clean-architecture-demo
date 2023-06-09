import { test, expect } from '@playwright/test';
 
test('should navigate to the home, liked and saved page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'S' }).click();
  await expect(page).toHaveURL('/saved');
  await expect(page.getByRole('heading', { name: 'Saved photographies' })).toBeTruthy();

  await page.getByRole('link', { name: 'L', exact: true }).click();
  await expect(page).toHaveURL('/liked');
  await expect(page.getByRole('heading', { name: 'Liked photographies' })).toBeTruthy();


  await page.getByRole('link', { name: 'La photothèque' }).click();
  await expect(page).toHaveURL('/');
  await expect(page.getByRole('heading', { name: 'Quality work from expert photographers' })).toBeTruthy();
});
 
test('should translate filter actions to the url', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('cat');
  await page.getByPlaceholder('Search...').press('Enter');
  await expect(page).toHaveURL('/?search=cat');

  await page.locator('select[name="order_by"]').selectOption('relevant');
  await expect(page).toHaveURL('/?search=cat&order_by=relevant');
  await page.locator('select[name="order_by"]').selectOption('latest');
  await expect(page).toHaveURL('/?search=cat&order_by=latest');

  await page.locator('select[name="color"]').selectOption('black');
  await expect(page.locator('//div[contains(@class,"Layout_layout_container")]')).toHaveClass(/black/);
});
  