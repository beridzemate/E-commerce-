// backend/utils/dataUtils.js
/**
 * Create a mock product object.
 * @param {Object} overrides - Fields to override default values.
 * @returns {Object} A product object.
 */
function createMockProduct(overrides = {}) {
    const defaultProduct = {
      name: 'Sample Product',
      category: 'Sample Category',
      description: 'A sample product for testing.',
      price: 9.99,
      image: 'https://via.placeholder.com/150',
    };
    return { ...defaultProduct, ...overrides };
  }
  
  /**
   * Create an array of mock products.
   * @param {number} count - Number of products to generate.
   * @returns {Array} Array of product objects.
   */
  function createMockProducts(count = 10) {
    const products = [];
    for (let i = 0; i < count; i++) {
      products.push(
        createMockProduct({
          name: `Product ${i + 1}`,
          price: Math.random() * 100,
        })
      );
    }
    return products;
  }
  
  module.exports = {
    createMockProduct,
    createMockProducts,
  };
  