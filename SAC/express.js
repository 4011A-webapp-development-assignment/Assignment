const express = require('express'); //Tutorial followed from: https://dev.to/victrexx2002/introduction-to-ejs-a-guide-to-building-dynamic-web-applications-2737
const sac = express();

const data = ["Imogen"]

sac.set('view engine', 'ejs');

let names = data.length;

sac.get('/', (req, res) => {
    res.render('index', { name: "Christopher", data : data, names: names});
});

sac.listen(5000, () => {
    console.log('SAC listening at port 5000');
})