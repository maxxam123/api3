# api3

1.  added index.js
    npm install express cors mongoose dotenv nodemon jsonwebtoken

package.json added "start": "nodemon index.js",
api3 --> added .env -->
"MONGO_URL = mongodb+srv://max:gummersbach@cluster1.l3nki.mongodb.net/netflix?retryWrites=true&w=majority"

IN: index.js

        const express = require('express');
        const app = express();
        const mongoose = require('mongoose');
        const dotenv = require('dotenv');
        const cors = require('cors');

        app.use(cors());
        dotenv.config();

        mongoose
        .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Database connected successful...'))
        .catch((err) => console.log(err));

        app.listen(8000, () => {
        console.log('Server is listening on port 8000...');
        });

api3 --> added models --> "List.js, Movie.js, User.js"

2.  prepared List.js
    prepared Movie.js
    prepared User.js

api3 --> added routes --> added "auth.js & lists.js & movies.js & users.js"

3.
