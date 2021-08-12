const palette = require('../../models/palette');
const Palette = require('../../models/palette');

module.exports = {
  index,
  show,
  create, 
  delete: deletePalette
};


async function deletePalette(req, res) {
  req.body.user = req.user._id
  await Palette.findOneAndDelete({_id: req.body._id});
  res.json(req.body)
}

async function index(req, res) {
    const palettes = await Palette.find({}).sort('createdAt')
    palettes.reverse()
    res.json(palettes);
}
async function create(req, res) {
    req.body.user = req.user._id;
    req.body.colors = [];
    for (let i=1; i < 6; i++) {
        if (req.body[`color${i}`].length === 7) req.body.colors.push(req.body[`color${i}`]);
    }
    const palette = await Palette.create(req.body);
    res.json(palette);
}

async function show(req, res) {
  const palette = await Palette.findById(req.params.id);
  res.json(palette);
}