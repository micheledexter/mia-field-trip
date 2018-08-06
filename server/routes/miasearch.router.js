const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

axios.get('http://search.artsmia.org/armor')
.then( res => {
    let hits = res.data.hits.hits;
    console.log('hits', hits);
})
.catch( error => {
    console.log('Error getting API', error);
})
module.exports = router;