const http = require("http");
const AppController = require("../controllers.AppController");
const StudentsController = require("../controllers.StudentsController");
const express = require("express");
const router = express.Router();

router.get('/', (request, response) => {
    AppController.getHomepage(request, router);
});

router.get('/students', (request, response) => {
    StudentsController.getAllStudents(request, response);
});

router.get('/students/:major', (request, response) => {
    StudentsController.getAllStidemtsByMajor(request, response);
});

module.exports = router;
