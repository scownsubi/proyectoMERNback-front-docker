const mongoose = require('mongoose')

/*mongoose.connect('mongodb://mongodb:27017', err => {
    if (err)
        throw err;
    console.log('Connected to mongodb');
});*/

mongoose.connect('mongodb://mongodb:27017/mern')
.then(
    db=>console.log('Conexión exitósa')
).catch(
    err=>console.log(err)
)