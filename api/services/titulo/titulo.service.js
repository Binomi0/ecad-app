class HealthService {
  constructor(tituloModel) {
    this.TituloModel = tituloModel;
  }

  async get(codigo) {
    return this.TituloModel.findOne({ codigo });
  }

  getAll() {
    return this.TituloModel.find({});
  }

  async create(newTitulo) {
    return this.TituloModel.create(newTitulo);
  }

  async update(codigo, fields) {
    return this.TituloModel.findOneAndUpdate({ codigo }, fields, { new: true });
  }

  async delete(codigo) {
    return this.TituloModel.findOneAndDelete({ codigo });
  }
}

module.exports = HealthService;
