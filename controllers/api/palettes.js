const Palette = require('../../models/palette');

module.exports = {
  index,
  show,
  create, 
};


async function index(req, res) {
    const palettes = await Palette.find({}).sort('createdAt').exec();
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