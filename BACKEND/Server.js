const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const authRouter = require("./routes/auth");
const Account = require("./routes/Account");

mongoose.connect(
    'mongodb+srv://ajamanka72:Amadou567@bankingsystemcluster.nxc46.mongodb.net/?retryWrites=true&w=majority&appName=BankingSystemCluster'
    ).then(()=>console.log('MongoDB Connected!')
    ).catch((error) => console.log(error));

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173', // Allow frontend URL here
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Pragma'
    ],
    credentials: true
}));

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Allow credentials (optional)
};

app.use(cors(corsOptions))
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/account', Account);

app.listen(PORT, (req, res) => {
    console.log(`Server Started on PORT: ${PORT}`);
});
