const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const con = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'post_db',
});

module.exports = {
  doGetUser: (req, res, error) => {
    res.render('index', {
      errorMessage: [
        { msg: '' },
      ],
    });
  },
  doPostUser: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorsArray = errors.array();
      console.log(errorsArray);
      res.render('register', {
        errorMessage: errorsArray,
      });
    } else {
      const mysql = 'select * from users';
      con.query(mysql, function (err, result, fields) {
        const mail = result.filter((value) => {
          return value.email === req.body.email;
        });
        if (mail.length === 1) {
          res.render('register', {
            errorMessage: [
              { msg: 'すでに同じメールアドレスが登録されています。' },
            ],
          });
        } else {
          const sql = 'INSERT INTO users SET ?';
          con.query(sql, req.body, function (err, result, fields) {
            if (err) throw err;
            const token = jwt.sign(
              { name: req.body.name, email: req.body.email },
              'secret'
            );
            req.session.passport = { user: { token: token } };
            jwt.verify(token, 'secret', (err, user) => {
              if (err) {
                return res.sendStatus(403);
              } else {
                res.redirect('/board');
              }
            });
          });
        }
      });
    }
  },
  doGetRegistar: (req, res) => {
    res.render('register', {
      errorMessage: '',
    });
  },
  doGetLogin: (req, res) => {
    if (req.session.passport === undefined) {
      res.redirect('/');
    } else {
      const token = req.session.passport.user.token;
      jwt.verify(token, 'secret', (err, user) => {
        if (err) {
          return res.sendStatus(403);
        } else {
          res.render('post', { user: user.name });
        }
      });
    }
  },
  doGetSuccess: (req, res) => {
    const token = jwt.sign(
      {
        name: req.session.passport.user.username,
        email: req.session.passport.user.email,
      },
      'secret'
    );
    req.session.passport.user['token'] = token;
    res.redirect('/board');
  },
  doGetFailure: (req, res) => {
    res.render('index', {
      errorMessage: [{ msg: 'パスワードかemailが違います' }],
    });
  },
  doPostLogout: (req, res) => {
    req.session.passport = undefined;
    res.redirect('/');
  },
  doGetBoard: (req, res) => {
    if (req.session.passport === undefined) {
      res.redirect('/');
    } else {
      const token = req.session.passport.user.token;
      jwt.verify(token, 'secret', (err, user) => {
        if (err) {
          return res.sendStatus(403);
        } else {
          res.render('board', { user: user.name });
        }
      });
    }
  },
};
