var express = require('express');
var router = express.Router();


const users=[
  {
          id:     1,
          name:   "Sarah",
          
      }, 
      {
          id:     2,
          name:   "Mohammad",
          
      }
]
/* GET users listing. */
router.get('/', function(req, res ) {
  res.render('usersList',{users});
});
router.get('/create', function(req, res) {
  res.render('createUser');
});

router.post('/create', function(req, res) {
 users.push(req.body);
 res.redirect('/users');
});
 
router.get('/edit/:userIndex', function(req, res) {
 res.render('editUser',{
   user:users[req.params.userIndex],
  userIndex:req.params.userIndex
})
 });

 router.post('/edit/:userIndex', function(req, res) {
  users[req.params.userIndex]=req.body;
  res.redirect('/users');
  });
module.exports = router;
