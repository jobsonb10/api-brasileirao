const Time = require("../models/Time");

const getAll = async (req, res) => {
  try {
    const times = await Time.find();
    if (times.length === 0) {
      return res.send({ error: "Nenhum time foi cadastrado!" });
    }
    return res.send({ times });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  const { nome, estado, cidade, idade } = req.body;
  if (!nome || !estado || !cidade || !idade) {
    return res.send({
      message: "Você não enviou todos os dados necessários para o cadastro!",
    });
  }

  const novoTime = await new Time({
    nome,
    estado,
    cidade,
    idade,
  });
  try {
    await novoTime.save();
    return res
      .status(201)
      .send({ message: "Time incluído com sucesso", novoTime });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const time = await Time.findById(id);
    return res.status(200).send({ time });
  } catch (err) {
    return res.status(500).send({ error: err});
  }
};

const del = async (req, res) => {
  try {
    await res.time.remove();
    return res.send({message: "Time removido com sucesso!"})
  } catch (err) {
    return res.status(500).send({ error: err});
  }
}

const update = async (req,res) => {
  try { 
    await res.time.updateOne(res.novoTime);
  } catch (err) {
    res.status(500).send({ error: err});
  }
  res.send({message: "Time atualizado com sucesso!"});
} 

module.exports = {
  getAll,
  create,
  getById,
  del,
  update
};
