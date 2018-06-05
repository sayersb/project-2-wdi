const Result = require('../models/result.js');

function indexRoute(req, res){
  Result
    .find()
    .populate('creator')  //gonna take the id in field creator and replace with the object associated instead of id
    .exec()
    .then( results =>{
      res.render('results/index', {results});
    });
}

function showRoute(req, res){
  Result
    .findById(req.params.id)
    .exec()
    .then( result =>{
      res.render('results/show', {result});
    });
}

function newRoute(req, res){
  if(!res.locals.isLoggedIn) return res.redirect('/'); //no access to new pictures unless logged in
  res.render('results/new');
}

function createRoute(req, res){
  const resultData = req.body;
  resultData['creator'] = res.locals.user.id;  //links image to user who is logged in
  console.log(resultData);
  Result
    .create(req.body)
    .then( result =>{
      return res.redirect(`/results/${result.id}`);
    });
}

function editRoute(req, res){
  Result
    .findById(req.params.id)
    .exec()
    .then( result =>{
      res.render('results/edit', {result});
    });
}

function updateRoute(req, res){
  Result
    .findById(req.params.id)
    .update(req.body)
    .then( result =>{
      return res.redirect(`/results/${result.id}`);
    });
}

function deleteRoute(req, res){
  Result
    .findById(req.params.id)
    .then( result =>{
      result.remove();
      return res.redirect('/results');
    });
}

// function createCommentRoute(req, res){
//   Result
//     .findById(req.params.id)
//     .exec()
//     .then( result =>{
//       result.comments.create(req.body);
//       return res.redirect(`/results/${result.id}`);
//     });
// }


module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
  // createComment: createCommentRoute
};
