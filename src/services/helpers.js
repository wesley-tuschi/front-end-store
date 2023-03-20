export function getLocalStorage(id) {
  const local = localStorage.getItem('product');
  if (local) {
    const newLocal = JSON.parse(local);
    const localParse = [...newLocal, id];
    localStorage.setItem('product', JSON.stringify(localParse));
  } else {
    localStorage.setItem('product', JSON.stringify([id]));
  }
}
