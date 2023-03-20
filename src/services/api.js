export async function getCategories() {
  const fetchResult = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = fetchResult.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchResult = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = fetchResult.json();
  return data;
}

export async function getProductById(PRODUCT_ID) {
  const fetchResult = await fetch(`https://api.mercadolibre.com/items/${PRODUCT_ID}`);
  const data = fetchResult.json();
  return data;
}
