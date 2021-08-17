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
        {name: 'Petal', code: '#F98866'},
        {name: 'Poppy', code: '#FF420E'},
        {name: 'Stem', code: '#80BD9E'},
        {name: 'Spring Green', code: '#89DA59'},
        {name: 'Mist', code: '#90AFC5'},
        {name: 'Stone', code: '#336B87'},
        {name: 'Shadow', code: '#2A3132'},
        {name: 'Automn Foliage', code: '#763626'},
        {name: 'Sky', code: '#375E97'},
        {name: 'Sunset', code: '#FB6542'},
        {name: 'Sunflower', code: '#FFBB00'},
        {name: 'Grass', code: '#3F681C'},
        {name: 'Saltwater', code: '#257985'},
        {name: 'Lagoon', code: '#5EA8A7'},
        {name: 'Whitewash', code: '#FFFFFF'},
        {name: 'Raspberry', code: '#FF4447'},
    ]);
    
    await Palette.deleteMany ({});
    const palettes = await Palette.create([
        {
            name: 'Primary Colors',
            colors: [colors[0].code, colors[3].code, colors[6].code],
            user: users[0]
        },
        {
            name: 'Pastels',
            colors: ['#d7f8f9', "#d9f6c1", "#ffc2d1", "#e8d0fb", '#fdddbf' ],
            user: users[0]
        },
        {
            name: 'Garden',
            colors: [colors[7].code, colors[8].code, colors[9].code, colors[10].code ],
            user: users[0]
        },
        {
            name: 'Earth',
            colors: [colors[11].code, colors[12].code, colors[13].code, colors[14].code ],
            user: users[0]
        },
        {
            name: 'Sunset',
            colors: [colors[15].code, colors[16].code, colors[17].code, colors[18].code ],
            user: users[0]
        },
        {
            name: 'Maritime',
            colors: [colors[19].code, colors[20].code, colors[21].code, colors[22].code ],
            user: users[0]
        },
    ]);

    console.log(colors)
    console.log(palettes)
    console.log(users)

    process.exit();

})();
