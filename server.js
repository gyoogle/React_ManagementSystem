const fs = require('fs');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



const data = fs.readFileSync('./database.json');

const conf = JSON.parse(data);

const mysql = require('mysql');



const connection = mysql.createConnection({

    host: conf.host,

    user: conf.user,

    password: conf.password,

    port: conf.port,

    database: conf.database

});

connection.connect();



app.get('/api/customers', (req, res) => {

    connection.query(

        'SELECT * FROM CUSTOMER',

        (err, rows, fields) => {

            res.send(rows);

        }

    )

});



app.listen(port, () => console.log(`Listening on port ${port}`));


/*
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birth': '931229',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '이순신',
            'birth': '931112',
            'gender': '남자',
            'job': '군인'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '손흥민',
            'birth': '920203',
            'gender': '남자',
            'job': '축구선수'
        },
        {
            'id': 4,
            'image': 'https://placeimg.com/64/64/4',
            'name': '류현진',
            'birth': '911112',
            'gender': '남자',
            'job': '야구선수'
        },
        {
            'id': 5,
            'image': 'https://placeimg.com/64/64/5',
            'name': '백종원',
            'birth': '731112',
            'gender': '남자',
            'job': '요리사'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
*/