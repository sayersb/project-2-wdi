const KeyPlayer = require('../models/keyplayer')

function keyPlayersIndex(req, res){
  KeyPlayer
    .find()
    .exec()
    .then( keyplayers => {
      res.render('keyplayers/index', {
        title: 'All the key players',
        keyplayers
      });
    });
}

function keyPlayersShow(req, res){
  KeyPlayer
    .findById(req.params.id)
    .exec()
    .then( keyplayer => {
      res.render('keyplayers/show', {keyplayer});
    });
}

function keyPlayersNew(req, res){
  res.render('keyplayers/new');
}

function keyPlayersCreate(req, res){
  KeyPlayer
    .create(req.body)
    .then((keyplayer) => {
      return res.redirect(`keyplayers/${keyplayer._id}`);
    });
}

function keyPlayersEdit(req, res){
  KeyPlayer
    .findById(req.params.id)
    .exec()
    .then( keyplayer => {
      res.render('keyplayers/edit', {keyplayer});
    });
}

function keyPlayersUpdate(req, res){
  KeyPlayer
    .findById(req.params.id)
    .update(req.body)
    .exec()
    .then( keyplayer => {
      return res.redirect(`/keyplayers/${req.params.id}`);
    });
}

function keyPlayersDelete(req, res){
  KeyPlayer
    .findById(req.params.id)
    .exec()
    .then(keyplayer => {
      keyplayer.remove();
      return res.redirect('/keyplayers');
    });
}


module.exports = {
  index: keyPlayersIndex,
  show: keyPlayersShow,
  new: keyPlayersNew,
  create: keyPlayersCreate,
  edit: keyPlayersEdit,
  update: keyPlayersUpdate,
  delete: keyPlayersDelete
};
