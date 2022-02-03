var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;


router.post('/prevemployment', (req, res, next) => {
    console.log(req.body);
    const { align } = req.body;

    const payload = { align };
    console.log(payload);
    req.collection.insertOne(payload)
        .then(result => res.json(result.ops[0]))
        .catch(error => res.send(error));
});
module.exports = router;