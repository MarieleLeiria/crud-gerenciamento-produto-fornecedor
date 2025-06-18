"use strict";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.post = async (req, res, next) => {
  const newProvider = await prisma.provider.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  });

  res.status(200).json(newProvider);
  // res.status(200).send({
  //   message:"Fornecedor cadastrado com sucesso"
  // });
};

exports.put = async (req, res, next) => {
  try {
    const id = req.params;

    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    const updated = await prisma.provider.update({
      where: {
        id: id,
      },
      data: { name, email, password },
    });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar dados do fornecedor" });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteProvider = await prisma.provider.delete({
      where: { id: id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar fornecedor." });
  }
};
