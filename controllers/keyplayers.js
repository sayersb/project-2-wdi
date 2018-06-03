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



module.exports = {
  index: keyPlayersIndex,
  show: keyPlayersShow,
  new: keyPlayersNew,
  create: keyPlayersCreate,
  edit: keyPlayersEdit,
  update: keyPlayersUpdate,
  delete: keyPlayersDelete
};
