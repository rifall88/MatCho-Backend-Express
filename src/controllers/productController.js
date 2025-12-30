import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  const userId = req.userDb.id;
  const { product_name, description, price, stock, weight } = req.body;
  const image_url = req.file ? req.file.filename : null;
  try {
    const productData = await Product.create({
      product_name,
      description,
      price: parseInt(price),
      stock: parseInt(stock),
      weight: parseInt(weight),
      image_url,
      created_by: userId,
      deleted_at: null,
    });
    res.status(201).json({ message: "Success add product", data: productData });
  } catch (err) {
    console.error("Error creating product", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
