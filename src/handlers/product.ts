import prisma from "../db";
//Get product
export const getOneProduct = async (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;

  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsTo: userId,
    },
  });

  res.status(200).json({ data: product });
};

// Get all products
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.status(200).json({ data: user.products });
};

// Create product
export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.status(201).json({ data: product });
};

// Update product

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await prisma.product.update({
    where: {
      id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  });

  res.status(200).json({ data: product });
};
