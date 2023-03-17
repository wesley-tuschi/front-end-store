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

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
