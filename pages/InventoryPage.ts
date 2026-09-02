import { Page, Locator, expect } from '@playwright/test';
import { ProductData } from '../data/dataFactory';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryNav: Locator;
  readonly productNameInput: Locator;
  readonly priceInput: Locator;
  readonly saveButton: Locator;
  readonly successToast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryNav = page.getByRole('link', { name: 'Inventory' });
    this.productNameInput = page.getByLabel('Product Name');
    this.priceInput = page.getByLabel('Price');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.successToast = page.getByRole('alert');
  }

  async navigateToInventory() {
    await this.inventoryNav.click();
  }

  async addProduct(product: ProductData) {
    await this.productNameInput.fill(product.name);
    await this.priceInput.fill(product.price);
    await this.saveButton.click();
  }

  async assertSuccessToastVisible(expectedMessage: string = 'Product added successfully') {
    await expect(this.successToast).toBeVisible();
    await expect(this.successToast).toContainText(expectedMessage);
  }
}
