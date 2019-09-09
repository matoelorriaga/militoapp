class Api {
  constructor(app) {
    app.get('/api/greeting', (req, res) => {
      const name = req.query.name || 'World';
      res.json({ greeting: `Hello ${name}!` });
    });
  }
}

module.exports = Api;
