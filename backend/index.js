const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = 8150;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

let usersData = [];

app.post('/api/submit', (req, res) => {

    const { nome, cognome, dataNascita, sesso, skills } = req.body;

    if (!nome || !cognome || !dataNascita || !sesso || !skills || skills.length === 0) {
        return res.status(400).json({ message: 'Tutti i campi sono obbligatori!' });
    }

    console.log('Dati ricevuti:', { nome, cognome, dataNascita, sesso, skills });

    usersData.push({ nome, cognome, dataNascita, sesso, skills });

    res.status(200).json({ message: 'Dati ricevuti con successo!' });
});


app.get('/api/users', (req, res) => {
    res.status(200).json(usersData);
});

app.listen(PORT,()=>{
    console.log('Server is running')
})