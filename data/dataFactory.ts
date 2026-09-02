declare const process: { env: Record<string, string | undefined> };

export interface UserCredentials {
  username: string;
  password: string;
}

export interface ProductData {
  name: string;
  price: string;
}

export const adminUser: UserCredentials = {
  username: process.env.ADMIN_USERNAME || 'admin@store.com',
  password: process.env.ADMIN_PASSWORD || 'adminPassword123',
};

export function createProductData(overrides: Partial<ProductData> = {}): ProductData {
  return {
    name: 'Wireless Mouse',
    price: '29.99',
    ...overrides,
  };
}
