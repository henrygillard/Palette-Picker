require('dotenv').config();
require('./config/database');

const Color = require("./models/color");
const Palette = require("./models/palette");
const User = require('./models/user');

(async function() {

    const users = await User.find({})
    
    await Color.deleteMany ({});
    const colors = await Color.create([
        {name: 'Red', code: '#FF0000'},
        {name: 'Orange', code: '#FF8000'},
        {name: 'Yellow', code: '#FFFF00'},
        {name: 'Blue', code: '#0000FF'},
        {name: 'Purple', code: '#7F00FF'},
        {name: 'Pink', code: '#FF00FF'},
        {name: 'Green', code: '#00FF00'},
    ]);
    
    await Palette.deleteMany ({});
    const palettes = await Palette.create([
        {
            name: 'Primary Colors',
            colors: [colors[0].code, colors[3].code, colors[6].code],
            user: users[0]
        },
    ]);

    console.log(colors)
    console.log(palettes)
    console.log(users)

    process.exit();

})();
