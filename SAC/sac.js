const express = require('express')
const sac = express();
const port = 3000;

sac.use(express.static('public'));

sac.get('/', (req, res) => {
    res.sendFile('index.html', (err) => {
        if (err){
            console.log(err);
        }
    })
});

sac.listen(port, () => {
    console.log(`SAC is listening on port ${port}!`)
});