export function saveLocalStorage({ id, name, price, image, freeShipping, maxQuantity }) {
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
          freeShipping: product.freeShipping,
          maxQuantity: product.maxQuantity,
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
        freeShipping,
        maxQuantity,
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
      freeShipping,
      maxQuantity,
    }]));
  }
}

export function saveComentsLocalStorage(id, email, rating, evaluation) {
  const local = localStorage.getItem(id);
  if (local) {
    const newLocal = JSON.parse(local);
    newLocal.push({
      email,
      rating,
      evaluation,
    });
    localStorage.setItem(id, JSON.stringify(newLocal));
  } else {
    localStorage.setItem(id, JSON.stringify([{
      email,
      rating,
      evaluation,
    }]));
  }
}
