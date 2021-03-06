const express = require('express');
const router = express.Router();

const static = require('../controllers/static');
const keyplayersController = require('../controllers/keyplayers');
const toptensController = require('../controllers/toptens');
const botrsController = require('../controllers/botrs');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const results = require('../controllers/results');

router.get('/', (req, res) => res.render('home', {
  isHomepage: true
}));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);


router.route('/logout')
  .get(sessions.delete);


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


router.route('/botrs')
  .get(botrsController.index)
  .post(botrsController.create);

router.route('/botrs/new')
  .get(botrsController.new);

router.route('/botrs/:id')
  .get(botrsController.show)
  .put(botrsController.update)
  .delete(botrsController.delete);

router.route('/botrs/:id/edit')
  .get(botrsController.edit);

router.route('/results')
  .get(results.index)
  .post(results.create);

router.route('/results/new')
  .get(results.new);

router.route('/results/:id')
  .get(results.show)
  .put(results.update)
  .delete(results.delete);

router.route('/results/:id/edit')
  .get(results.edit);


module.exports = router;
