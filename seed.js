require('dotenv').config();
require('./config/database');

const Color = require("./models/color");

(async function() {
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

    console.log(colors)

    process.exit();

})();
