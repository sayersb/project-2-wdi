const express = require('express');
const router = express.Router();

const keyplayersController = require('../controllers/keyplayers');
const toptensController = require('../controllers/toptens');


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


router.route('/toptens')
  .get(toptensController.index)
  .post(toptensController.create);

router.route('/toptens/new')
  .get(toptensController.new);

router.route('/toptens/:id')
  .get(toptensController.show)
  .put(toptensController.update)
  .delete(toptensController.delete);

router.route('/toptens/:id/edit')
  .get(toptensController.edit);


module.exports = router;
