class HealthService {
  constructor(tituloModel) {
    this.TituloModel = tituloModel;
  }

  async get(id) {
    return this.TituloModel.findById(id);
  }

  getAll() {
    return this.TituloModel.find({});
  }

  async create(newTitulo) {
    return this.TituloModel.create(newTitulo);
  }

  async update(id, fields) {
    return this.TituloModel.findByIdAndUpdate(id, fields, { new: true });
  }

  async delete(id) {
    return this.TituloModel.findByIdAndDelete(id);
  }
}

module.exports = HealthService;
