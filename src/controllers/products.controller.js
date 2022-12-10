import ProductsModel from "../models/products.model.js";

const productController = {
  create: async ({ title, price, imageUrl, description }) => {
    const result = await ProductsModel.create({
      title,
      price,
      imageUrl,
      description,
    });
    if (result) return result.dataValues;
  },
  findAll: async (condition) => {
    const result = await ProductsModel.findAll(condition);
    if (result) {
      const products = result.map((data) => data.dataValues);
      return products;
    }
  },
  findById: async (productID) => {
    const result = await ProductsModel.findByPk(productID);
    if (result) return result.dataValues;
  },
  findAndUpdate: async (productID, product) => {
    const result = await ProductsModel.findByPk(productID);
    if (result) {
      result.title = product.title || result.title;
      result.price = product.price || result.price;
      result.imageUrl = product.imageUrl || result.imageUrl;
      result.description = product.description || result.description;
      return (await result.save()).dataValues;
    }
  },
  delete: async (productID) => {
    let result = await ProductsModel.findByPk(productID);
    if (result) {
      result = await result.destroy();
      if (result) return true;
    }
  },
};

export default productController;
