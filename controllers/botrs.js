const Botr = require('../models/botr');

function botrIndex(req, res){
  Botr
    .find()
    .exec()
    .then( botrs => {
      res.render('botrs/index', {
        title: 'Best of the Rest',
        botrs
      });
    });
}


function botrShow(req, res){
  Botr
    .findById(req.params.id)
    .exec()
    .then( botr => {
      res.render('botrs/show', {botr});
    });
}

function botrNew(req, res){
  res.render('botrs/new');
}

function botrCreate(req, res){
  Botr
    .create(req.body)
    .then((botr) => {
      return res.redirect(`/botrs/${botr._id}`);
    });
}

function botrEdit(req, res){
  Botr
    .findById(req.params.id)
    .exec()
    .then( botr => {
      res.render('botrs/edit', {botr});
    });
}

function botrUpdate(req, res){
  Botr
    .findById(req.params.id)
    .update(req.body)
    .exec()
    .then(botr => {
      return res.redirect(`/botrs/${botr._id}`);
    });
}

function botrDelete(req, res){
  Botr
    .findById(req.params.id)
    .exec()
    .then(botr => {
      botr.remove();
      return res.redirect('/botrs');
    });
}

module.exports = {
  index: botrIndex,
  show: botrShow,
  new: botrNew,
  create: botrCreate,
  edit: botrEdit,
  update: botrUpdate,
  delete: botrDelete
};
