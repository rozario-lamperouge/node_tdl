const app = require('./app');
const mongoose = require('mongoose');

// connect to mongo
const dburl = "mongodb+srv://richardrozarioa:yzdxn2wjj6@tasks.nfckdmi.mongodb.net/tdl?retryWrites=true&w=majority";

mongoose.connect(dburl)
    .then((result) => console.log("Database Connected"))
    .catch((err) => console.log(err));

port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
})

