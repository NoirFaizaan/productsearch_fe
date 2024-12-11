import api from "./api";

/**
 * Fetch products based on a search query.
 * @param {string} query - The search query.
 * @returns {Promise} - A promise that resolves to the list of products.
 */

export const fetchProducts = async (query) => {
  if (!query || query.length < 3) {
    throw new Error("Query must be at least 3 characters long.");
  }
  try {
    const response = await api.get(`/search?query=${query}`);
    console.log();
    if (response.status === 204 || !response.data) {
      return []; // Return an empty array if no data is found
    }
    return response.data.data || []; // Assuming the API response contains data in the `data` field
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch products."
    );
  }
};

/**
 * Fetch a single product by ID or SKU.
 * @param {string} idOrSku - The product's ID or SKU.
 * @returns {Promise} - A promise that resolves to the product details.
 */
export const fetchProductByIdOrSku = async (idOrSku) => {
  if (!idOrSku) {
    throw new Error("ID or SKU is required.");
  }
  try {
    const response = await api.get(`/${idOrSku}`);
    return response.data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch product details."
    );
  }
};
