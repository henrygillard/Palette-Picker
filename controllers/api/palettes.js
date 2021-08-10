const Palette = require('../../models/palette');

module.exports = {
  index,
  show,
  create
};

async function create(req, res) {
    const palette = new Palette(req.body);
    palette.save()
    res.redirect("/palettes");
}

async function index(req, res) {
  const palettes = await Palette.find({}).sort('createdAt').populate("colors").exec();
  res.json(palettes);
}

async function show(req, res) {
  const palette = await Palette.findById(req.params.id);
  res.json(palette);
}