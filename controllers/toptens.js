const Topten = require('../models/topten');

function toptensIndex(req, res){
  Topten
    .find()
    .exec()
    .then( toptens => {
      res.render('toptens/index', {
        title: 'Top 10 Teams',
        toptens
      });
    });
}

function toptensShow(req, res){
  Topten
    .findById(req.params.id)
    .exec()
    .then( topten => {
      res.render('toptens/show', {topten});
    });
}

function toptensNew(req, res){
  res.render('toptens/new');
}

function toptensCreate(req, res){
  Topten
    .create(req.body)
    .then((topten) =>{
      return res.redirect(`/toptens/${topten._id}`);
    });
}

function toptensEdit(req, res){
  Topten
    .create(req.body)
    .then((topten) =>{
      return res.redirect('toptens/edit', {topten});
    });
}

function toptensUpdate(req, res){
  Topten
    .findById(req.params.id)
    .update(req.body)
    .exec()
    .then(topten => {
      return res.redirect(`/toptens/${topten._id}`);
    });
}

function toptensDelete(req, res){
  Topten
    .findById(req.params.id)
    .exec()
    .then(topten => {
      topten.remove();
      return res.redirect('/toptens');
    });
}

module.exports = {
  index: toptensIndex,
  show: toptensShow,
  new: toptensNew,
  create: toptensCreate,
  edit: toptensEdit,
  update: toptensUpdate,
  delete: toptensDelete
};
