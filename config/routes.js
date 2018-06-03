const express = require('express');
const router = express.Router();

const keyplayersController = require('../controllers/keyplayers');


router.get('/', (req, res) => res.render('home', {
  isHomepage: true
}));


router.route('/keyplayers')
  .get(keyplayersController.index)
  .post(keyplayersController.create);


router.route('/keyplayers/new')
  .get(keyplayersController.new);

router.route('/keyplayers/:id')
  .get(keyplayersController.show)
  .put(keyplayersController.update)
  .delete(keyplayersController.delete);

router.route('/keyplayers/:id/edit')
  .get(keyplayersController.edit);

module.exports = router;
