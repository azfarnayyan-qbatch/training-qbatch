// Product categories
enum Category {
  ELECTRONICS = "Electronics",
  CLOTHING = "Clothing",
  FOOD = "Food"
}

// Product status
enum ProductStatus {
  AVAILABLE = "Available",
  OUT_OF_STOCK = "Out of Stock"
}

// Basic product information
interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  quantity: number;
  status: ProductStatus;
}

// Product with additional supplier information
interface Supplier {
  supplierName: string;
  supplierCountry: string;
}

// Intersection type
type DetailedProduct = Product & Supplier;

// Product ID can be either a number or a string
type ProductId = number | string;

const products: DetailedProduct[] = [
  {
    id: 1,
    name: "Laptop",
    category: Category.ELECTRONICS,
    price: 120000,
    quantity: 5,
    status: ProductStatus.AVAILABLE,
    supplierName: "Tech Supplier",
    supplierCountry: "Pakistan"
  },

  {
    id: 2,
    name: "T-Shirt",
    category: Category.CLOTHING,
    price: 2500,
    quantity: 20,
    status: ProductStatus.AVAILABLE,
    supplierName: "Fashion Supplier",
    supplierCountry: "China"
  },

  {
    id: 3,
    name: "Rice",
    category: Category.FOOD,
    price: 300,
    quantity: 0,
    status: ProductStatus.OUT_OF_STOCK,
    supplierName: "Food Supplier",
    supplierCountry: "Pakistan"
  },

  {
    id: 4,
    name: "Headphones",
    category: Category.ELECTRONICS,
    price: 8000,
    quantity: 10,
    status: ProductStatus.AVAILABLE,
    supplierName: "Tech Supplier",
    supplierCountry: "China"
  },

  {
    id: 5,
    name: "Jeans",
    category: Category.CLOTHING,
    price: 5000,
    quantity: 0,
    status: ProductStatus.OUT_OF_STOCK,
    supplierName: "Fashion Supplier",
    supplierCountry: "Bangladesh"
  }
];


// Find all electronic products
const electronicProducts: DetailedProduct[] =
  products.filter((product) => {
    return product.category === Category.ELECTRONICS;
  });

console.log("Electronic Products:");
console.log(electronicProducts);


// Find all available products
const availableProducts: DetailedProduct[] =
  products.filter((product) => {
    return product.status === ProductStatus.AVAILABLE;
  });

console.log("Available Products:");
console.log(availableProducts);

function findProductById(
  products: DetailedProduct[],
  id: ProductId
): DetailedProduct | undefined {

  const product = products.find((product) => {
    return product.id === id;
  });

  return product;
}

const searchedProduct = findProductById(products, 3);

console.log("Searched Product:");
console.log(searchedProduct);

// Search product by name
function findProductByName(
  products: DetailedProduct[],
  name: string
): DetailedProduct | undefined {

  const product = products.find((product) => {
    return product.name.toLowerCase() === name.toLowerCase();
  });

  return product;
}

const productByName = findProductByName(
  products,
  "Laptop"
);

console.log("Product By Name:");
console.log(productByName);

// Sort products from lowest price to highest price
const productsByPrice: DetailedProduct[] = [
  ...products
];

productsByPrice.sort((product1, product2) => {
  return product1.price - product2.price;
});

console.log("Products Sorted By Price:");
console.log(productsByPrice);

const productsByHighestPrice: DetailedProduct[] = [
  ...products
];

productsByHighestPrice.sort((product1, product2) => {
  return product2.price - product1.price;
});

console.log("Products Sorted By Highest Price:");
console.log(productsByHighestPrice);

// Get only product names
const productNames: string[] =
  products.map((product) => {
    return product.name;
  });

console.log("Product Names:");
console.log(productNames);


// Calculate total inventory value
// Product value = price * quantity

const totalInventoryValue: number =
  products.reduce((total, product) => {

    const productValue =
      product.price * product.quantity;

    return total + productValue;

  }, 0);

console.log("Total Inventory Value:");
console.log(totalInventoryValue);


// Calculate total number of products in inventory
const totalQuantity: number =
  products.reduce((total, product) => {

    return total + product.quantity;

  }, 0);

console.log("Total Quantity:");
console.log(totalQuantity);


//AVERAGE PRICE
const totalPrice: number =
  products.reduce((total, product) => {

    return total + product.price;

  }, 0);

const averagePrice: number =
  totalPrice / products.length;

console.log("Average Product Price:");
console.log(averagePrice);


const outOfStockProducts: DetailedProduct[] =
  products.filter((product) => {

    return product.quantity === 0;

  });

console.log("Out Of Stock Products:");
console.log(outOfStockProducts);

const hasOutOfStockProducts: boolean =
  products.some((product) => {

    return product.quantity === 0;

  });

console.log("Has Out Of Stock Products:");
console.log(hasOutOfStockProducts);


const allProductsHavePrice: boolean =
  products.every((product) => {

    return product.price > 0;

  });

console.log("Do All Products Have Price?");
console.log(allProductsHavePrice);


// Generic function to return the first item
function getFirstItem<T>(items: T[]): T {

  return items[0];

}

const firstProduct: DetailedProduct =
  getFirstItem(products);

console.log("First Product:");
console.log(firstProduct);

// Generic function to find an item by ID
function findById<T extends { id: number }>(
  items: T[],
  id: number
): T | undefined {

  return items.find((item) => {

    return item.id === id;

  });

}

const productFound = findById(products, 1);

console.log("Product Found Using Generic Function:");
console.log(productFound);

// All Product properties become optional
type UpdateProduct = Partial<Product>;

const productUpdate: UpdateProduct = {

  price: 110000,
  quantity: 10

};

console.log("Product Update:");
console.log(productUpdate);

// Pick only name and price
type ProductSummary = Pick<
  Product,
  "name" | "price"
>;

const summary: ProductSummary = {

  name: "Laptop",
  price: 120000

};

console.log("Product Summary:");
console.log(summary);


// Remove supplier information
type ProductWithoutSupplier = Omit<
  DetailedProduct,
  "supplierName" | "supplierCountry"
>;

const productWithoutSupplier: ProductWithoutSupplier = {

  id: 1,
  name: "Laptop",
  category: Category.ELECTRONICS,
  price: 120000,
  quantity: 5,
  status: ProductStatus.AVAILABLE

};

console.log("Product Without Supplier:");
console.log(productWithoutSupplier);


interface OptionalProduct {

  id?: number;
  name?: string;
  price?: number;

}

type CompleteProduct =
  Required<OptionalProduct>;

const completeProduct: CompleteProduct = {

  id: 10,
  name: "Keyboard",
  price: 5000

};

console.log("Complete Product:");
console.log(completeProduct);

// Each category has a number
type CategoryCount =
  Record<Category, number>;

const categoryCount: CategoryCount = {

  [Category.ELECTRONICS]: 0,
  [Category.CLOTHING]: 0,
  [Category.FOOD]: 0

};


// Count products in each category
products.forEach((product) => {

  categoryCount[product.category]++;

});

console.log("Products Per Category:");
console.log(categoryCount);

console.log("FINAL INVENTORY REPORT");


console.log(
  "Total Products:",
  products.length
);

console.log(
  "Total Quantity:",
  totalQuantity
);

console.log(
  "Total Inventory Value:",
  totalInventoryValue
);

console.log(
  "Average Product Price:",
  averagePrice
);

console.log(
  "Out Of Stock Products:",
  outOfStockProducts.length
);

console.log(
  "Products By Category:",
  categoryCount
);