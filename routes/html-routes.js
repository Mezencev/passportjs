const path = require('path');
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {
  app.get('/', (req, res) => {
    if (req.user) {
      res.redirect('/members');
    }
    res.sendFile(path.join(__dirname, '../public/signup.html'));
  });
  app.get('/login', (req, res) => {
    if (req.user) {
      res.redirect('/members');
    }
    res.sendFile(path.join(__dirname, '../public/login.html'));    
  });
  app.get('/members', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/members.html'));        
  });
};
