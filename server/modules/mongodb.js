const mongoose = require('mongoose');

const PORT = process.env.PORT || 27017;
const dbName = 'koalaholla';

const dbUrl = `mongodb://localhost:${PORT}/${dbName}`;

mongoose.connect(dbUrl, { useNewUrlParser: true });

mongoose.connect.on('error', (e) => {
    console.log('error with connection', e);
})

mongoose.connect.once('connected', () => {
    console.log('mongo db connected on', PORT);
})
