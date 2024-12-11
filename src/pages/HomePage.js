import React, { useState } from "react"; 
import { fetchProducts } from "../services/productService"; // Import the API call
import ProductGrid from "../components/organisms/ProductGrid";
import SearchBar from "../components/molecules/SearchBar"; // Import the SearchBar component
import LoadingModal from "../components/atoms/Loader";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle search button click
  const handleSearch = () => {
    if (query.length >= 3) {
      setLoading(true);
      setError("");
      setProducts([]);
      fetchProducts(query)
        .then((data) => {
          if (data.length === 0) {
            console.log(data.length);
            setProducts([]);  // Clear products if no results
          } else {
            setProducts(data);  // Update products if results are found
          }
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setError("Please enter at least 3 characters.");
      alert("At least 3 characters required...!");
    }
  };

  // Clear search functionality
//   const handleClearSearch = () => {
//     setQuery("");  // Clear the search input
//     setProducts([]);  // Clear the products
//     setError("");  // Clear any error
//   };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-6">
        {/* Use SearchBar component */}
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      </div>

      {/* Render the LoadingModal when loading is true */}
      {loading && <LoadingModal show={loading} />}

      {/* Display error message if present */}
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* Display message if no products are found */}
      {products.length === 0 && !loading && !error && (
        <div className="text-center text-gray-500">
          No products found. Try searching for something else.
        </div>
      )}

      {/* Render ProductGrid only if there are products */}
      {products.length > 0 && <ProductGrid products={products} />}
    </div>
  );
};

export default HomePage;