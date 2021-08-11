const Color = require('../../models/color');

module.exports = {
  index,
  show,
  create
};

async function index(req, res) {
  const colors = await Color.find({})
  res.json(colors);
}

async function show(req, res) {
  const color = await Color.findById(req.params.id);
  res.json(color);
}

async function create(req, res) {
  const colors = await Color.create(req.body)
  res.json(colors);
}