import Batata from "../utils/sendEmail.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const postProduct = async (req, res, next) => {
  // pegando nome da requisicao
  const { name } = req.body;
  // validando se nome existe ou é valido
  if (!name || name.length < 3) {
    return res
      .status(400)
      .json({ error: "Nome inválido: deve ter pelo menos 3 caracteres." });
  }
  //salvando no banco o body recebido na requisicao
  try {
    const newProduct = await prisma.products.create({
      data: {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        avaiable: req.body.avaiable,
        quantity: req.body.quantity,
      },
    });
    res.status(201).json(newProduct);
    //envio de email abaixo
  } catch (err) {
    res.status(400);
    console.log(err);
  }

  //termina a funcao
};

export const putProduct = async (req, res, next) => {
  try {
    const id = req.params;

    const { name } = req.body;
    const { price } = req.body;
    const { description } = req.body;
    const { avaiable } = req.body;
    const { quantity } = req.body;

    const updated = await prisma.products.update({
      where: {
        id: id,
      },
      data: { name, price, description, avaiable, quantity },
    });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar produto." });
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteProduct = await prisma.products.delete({
      where: { id: id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar." });
  }
};
