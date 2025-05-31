const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

const config = {
  BASE_URL,
  endpoints: {
    products: `${BASE_URL}/products`,
    dashboard: `${BASE_URL}/dashboard/stats`,
    deleteProduct: (id) => `${BASE_URL}/deleteproduct/${id}`,
    updateProduct: (id) => `${BASE_URL}/updateproduct/${id}`,
    insertProduct: `${BASE_URL}/insertproduct`,
  },
};

export default config;
