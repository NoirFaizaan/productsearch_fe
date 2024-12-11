export const sortProducts = (products, key, order = "asc") => {
    return products.sort((a, b) => (order === "asc" ? a[key] - b[key] : b[key] - a[key]));
  };