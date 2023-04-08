const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('../app/routes/userRoute');
const transactionRoute = require('../app/routes/transactionRoute');
const ticketRoute = require('../app/routes/ticketRoute');
const seatRoute = require('../app/routes/seatRoute');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.get('/', (req, res) => res.send('Hello World!'));
//app.get('/test', (req, res) => res.send('Hello Camin MCI Anjay!'));

app.use('/user', userRoute);
app.use('/transaction', transactionRoute);
app.use('/ticket', ticketRoute);
app.use('/seat', seatRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));