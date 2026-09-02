import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { adminUser, createProductData } from '../data/dataFactory';

test.describe('Inventory Management', () => {
  test('Store Admin can add a product and see success toast', async ({ page }) => {
    
    // Please take a note that we are using the LoginPage object to handle login actions


    // But we can use API requests for login to speed up tests if needed ****** SO IMPORTANT *******
    const loginPage = new LoginPage(page); 


    const inventoryPage = new InventoryPage(page);

    /** AGAIN, even though we are using the LoginPage object for login, 
     * We can use API requests for login to speed up tests if needed ****** SO IMPORTANT *******
     */

     // 1. Log in as Store Admin using data factory credentials

    await loginPage.goto();
    await loginPage.login(adminUser);

    // 2. Navigate to Inventory module
    await inventoryPage.navigateToInventory();

    // 3 & 4. Fill Product Name, Price, and Click Save using data factory
    const product = createProductData();
    await inventoryPage.addProduct(product);

    // 5. Assert success toast message appears (handled within POM)
    await inventoryPage.assertSuccessToastVisible();
  });
});
