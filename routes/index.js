const express=require('express');
const router=express.Router();
const passport = require('passport');

const homeController=require('../controllers/home-controller');



router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/user/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect or respond as needed
    res.redirect('/'); // Redirect to a dashboard or another route
  }
);

router.get('/', homeController.home);
router.use('/users', require('./users'));



module.exports=router;