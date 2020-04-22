class TituloController {
  constructor(tituloService) {
    this.tituloService = tituloService;
  }

  get(req, res) {
    Promise.resolve()
      .then(() => this.tituloService.get(req.params.id))
      .then(res.send.bind(res))
      .catch((err) => res.send({ status: 400, error: err }));
  }

  getAll(req, res) {
    Promise.resolve()
      .then(() => this.tituloService.getAll())
      .then(res.send.bind(res))
      .catch((err) => res.send({ status: 400, error: err }));
  }

  create(req, res) {
    Promise.resolve()
      .then(() => this.tituloService.create(req.body))
      .then(res.send.bind(res))
      .catch((err) => res.send({ status: 400, error: err }));
  }

  update(req, res) {
    Promise.resolve()
      .then(() => this.tituloService.update(req.params.id, req.body))
      .then(res.send.bind(res))
      .catch((err) => res.send({ status: 400, error: err }));
  }

  delete(req, res) {
    Promise.resolve()
      .then(() => this.tituloService.delete(req.params.id))
      .then(res.send.bind(res))
      .catch((err) => res.send({ status: 400, error: err }));
  }
}

module.exports = TituloController;
