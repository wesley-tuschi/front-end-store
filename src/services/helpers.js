export function saveLocalStorage(id, name, price, image) {
  const local = localStorage.getItem('product');
  if (local) {
    const newLocal = JSON.parse(local);
    const localParse = newLocal.map((product) => {
      if (product.id === id) {
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    if (!localParse.find((product) => product.id === id)) {
      localParse.push({
        id,
        name,
        price,
        image,
        quantity: 1,
      });
    }
    localStorage.setItem('product', JSON.stringify(localParse));
  } else {
    localStorage.setItem('product', JSON.stringify([{
      id,
      name,
      price,
      image,
      quantity: 1,
    }]));
  }
}
