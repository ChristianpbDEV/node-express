const express = require('express');
const partnersRouter = express.Router();

//partners

partnersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you')
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

//:partnersId

partnersRouter.route('/:partnersId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the partners: ${req.params.partnerId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partnerId}`);
})
.put((req, res) => {
    res.write(`Updating the partners: ${req.params.partnerId}\n`);
    res.end(`Will update the partners: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting partners: ${req.params.partnerId}`);
});

module.exports = partnersRouter