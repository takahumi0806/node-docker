const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const ItemRegistValidator = require('../validators/userRegistValidator');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'post_db',
});

passport.serializeUser((user, done) => {
  console.log('Serialize ...');
  done(null, user);
});
passport.deserializeUser((user, done) => {
  console.log('Deserialize ...');
  done(null, user);
});

router.use(passport.initialize());
router.use(passport.session());

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/failure',
    successRedirect: '/success',
  })
);

passport.use(
  new LocalStrategy((email, password, done) => {
    const sql = 'select * from users';
    con.query(sql, function (err, result, fields) {
      const currentUser = result.filter((value) => {
        return value.email === email;
      });
      if (currentUser.length === 0) {
        // Error
        return done(null, false);
      } else if (email !== currentUser[0].email) {
        // Error
        return done(null, false);
      } else if (password !== currentUser[0].password) {
        // Error
        return done(null, false);
      } else {
        // Success and return user information.
        return done(null, {
          username: currentUser[0].name,
          password: password,
          email: email,
        });
      }
    });
  })
);
router.get('/', userController.doGetUser);
router.post('/', ItemRegistValidator, userController.doPostUser);
router.get('/post', userController.doGetLogin);
router.get('/register', userController.doGetRegistar);
router.get('/success', userController.doGetSuccess);
router.get('/failure', userController.doGetFailure);
router.get('/board', userController.doGetBoard);
router.post('/logout', userController.doPostLogout);

module.exports = router;
