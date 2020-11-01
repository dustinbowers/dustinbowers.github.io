const express = require('express');
const cors = require('cors');
const monk = require('monk');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

const port = process.env.PORT || 3000;
const db = monk(process.env.MONGO_URI || 'localhost/dustinbowers');
const links = db.get('links')

app.enable('trust proxy')
app.use(cors())
app.use(morgan('common'))
app.use(helmet())
app.use(express.json())


app.get('/', (req, res, next) => {
    res.send('Hello API!')
        .catch(next)
})

app.get('/links', (req, res, next) => {
    links
        .find()
        .then(links => {
            res.json(links)
        }).catch(next);
})

function verifyPassphrase(body) {
    const pw = (process.env.LINKS_PASSPHRASE || 'test');
    return (body.passphrase && body.passphrase.toString() === pw);
}

function isLinkValid(body) {
    return (body.url && body.url.toString().trim() !== '' && body.url.toString().trim().length < 1024);
}

app.post('/links', (req, res, next) => {
    if (verifyPassphrase(req.body) && isLinkValid(req.body)) {
        const newLink = {
            name: req.body.name.toString().trim() ,
            url: req.body.url.toString().trim(),
            created: new Date()
        }
        links.insert(newLink)
            .then(l => {
                res.json(l)
            }).catch(next);
    } else {
        res.status(422);
        res.json({
            message: "Bad request"
        });
    }
});

app.post('/links/:id/delete', (req, res, next) => {
    if (verifyPassphrase(req.body)) {
        const id = req.params.id
        links.remove({ _id: id })
            .then(l => {
                res.json({message: 'success'})
            }).catch(next);
    } else {
        res.status(422);
        res.json({
            message: "Bad request"
        });
    }
})

app.use((error, req, res, next) => {
    res.status(500);
    res.json({
        message: error.message
    });
});

app.listen(port, () => {
    console.log(`Express app listening on port: ${port}`)
})
