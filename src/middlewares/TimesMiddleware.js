const mongoose = require("mongoose");
const Time = require("../models/Time");

const ValidaID = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ error: "Id inválido!" });
  }

  try {
    const time = Time.findById(id);
    if (!time) {
      return res.status(404).send({ msgMiddleware: "Time não encontrado!" });
    }
    res.time = time;
  } catch (err) {
    return res.status(500).send({ error: err });
  }

  next();
};

module.exports = {
  ValidaID,
};
