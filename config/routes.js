const express = require('express');
const router = express.Router();

const keyplayersController = require('../controllers/keyplayers');


router.get('/', (req, res) => res.render('home', {
  isHomepage: true
}));


router.route('/keyplayers')
  .get(keyplayersController.index)
  .post(keyplayersController.create);


module.exports = router;
