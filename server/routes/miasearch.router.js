const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

axios.get('http://search.artsmia.org/')
.then( res => {
    let response = res.data;
    console.log('response', response);
})
.catch( error => {
    console.log('Error getting API', error);
})
module.exports = router;