var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;

router.get('/appointments', (req, res, next) => {
    req.collection.find({})
        .toArray()
        .then(results => res.json(results))
        .catch(error => res.send(error));
});

router.post('/appointments', (req, res, next) => {
    console.log(req.body);
    const { firstname, lastname, dateofbirth, Mstatus, align } = req.body;
    if (!dateofbirth || !firstname || !lastname) {
        return res.status(400).json({
            message: ' Date, Name are required',
        });
    }

    const payload = { firstname, lastname, dateofbirth, Mstatus, align };
    console.log(payload);
    req.collection.insertOne(payload)
        .then(result => res.json(result.ops[0]))
        .catch(error => res.send(error));
});

router.delete('/appointments/:id', (req, res, next) => {
    const { id } = req.params;
    const _id = ObjectID(id);
    req.collection.deleteOne({ _id })
        .then(result => res.json(result))
        .catch(error => res.send(error));
});

module.exports = router;