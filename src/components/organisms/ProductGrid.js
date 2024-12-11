import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const ProductGrid = ({ products = [] }) => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [filterBrand, setFilterBrand] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");  // Track sorting order

  // Handle sorting by rating
  const handleSort = () => {
    const order = sortOrder === "asc" ? "desc" : "asc";  // Toggle order
    setSortOrder(order);  // Update the sort order state

    const sorted = [...products].sort((a, b) => {
      const ratingA = a.rating || 0;
      const ratingB = b.rating || 0;
      return order === "asc" ? ratingA - ratingB : ratingB - ratingA;
    });
    setSortedProducts(sorted);
  };

  // Handle filtering by brand
  const handleFilterByBrand = (brand) => {
    setFilterBrand(brand);
  };

  useEffect(() => {
    // Apply brand filter
    if (filterBrand) {
      setSortedProducts(
        products.filter((product) =>
          product.brand?.toLowerCase() === filterBrand.toLowerCase()
        )
      );
    } else {
      setSortedProducts(products);
    }
  }, [filterBrand, products]);

  // Memoize unique brands for dropdown
  const uniqueBrands = useMemo(
    () =>
      [...new Set(products.map((product) => product.brand || "No Brand"))],
    [products]
  );

  return (
    <div>
      <div className="flex justify-between mb-4">
        {/* Sort Button */}
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={!products.length}
        >
          Sort by Rating ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>

        {/* Brand Filter */}
        <div>
          <label htmlFor="brand-filter" className="mr-2">
            Filter by Brand:
          </label>
          <select
            id="brand-filter"
            onChange={(e) => handleFilterByBrand(e.target.value)}
            className="border rounded py-2 px-4"
            value={filterBrand}
          >
            <option value="">All Brands</option>
            {uniqueBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.length === 0 ? (
          <div className="text-center">No products found.</div>
        ) : (
          sortedProducts.map((product) => (
            <div key={product.id || product.title} className="border p-4 rounded-lg">
              <img
                src={product.thumbnail || "https://via.placeholder.com/150"}
                alt={product.title || "Product"}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{product.title || "Untitled"}</h3>
                <p className="text-gray-600">
                  {product.description || "No description available."}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-bold">${product.price || "N/A"}</span>
                  <span className="text-sm text-yellow-500">
                    Rating: {product.rating || "N/A"}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Brand: {product.brand || "N/A"}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      rating: PropTypes.number,
      brand: PropTypes.string,
    })
  ),
};

export default ProductGrid;
