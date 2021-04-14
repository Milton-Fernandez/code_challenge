const express = require('express');
const pool = require('../modules/pool');
const { default: axios } = require('axios');

const router = express.Router();

router.get('/',(req,res) => {
    console.log('retrieving data');
    const queryText = 'SELECT * FROM "review";';
    pool.query(queryText).then(response =>{
        console.log('Retrieved all data');
        res.status(200).send(response.rows);
    }).catch(err => {
        console.log('Error in get',err);
        res.sendStatus(500);
    });
});

router.post('/add',(req,res) =>{
    console.log('Adding data');
    const data = req.body;
    const queryText = `INSERT INTO "review" ("user_id","comment","rating","image","title","author") VALUES ($1,$2,$3,$4,$5,$6); ` ;
    pool.query(queryText, [ data.user_id , data.comment , data.rating, data.image, data.title, data.author])
        .then(restult => {
            res.sendStatus(201);
        })
        .catch(error =>{
            console.log('Error adding new data',error);
            res.sendStatus(500);
        });
});



router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    console.log('Deleting data at id:', id);
    const queryText = `DELETE FROM "review" WHERE "id" = $1;`;
    console.log(id);
    pool.query(queryText, [id]).then(() => {
        console.log(`Deleted at id: ${id} successfully`);
        res.sendStatus(204);
    }).catch(err => {
        console.log('Error in delete', err);
        res.sendStatus(500);
    });
});

module.exports = router;