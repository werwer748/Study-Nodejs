const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
//   res.render('index', { title: 'Express' });
  res.locals.title = 'Express'; //이렇게도 사용 가능
  res.render('index');
});

module.exports = router;

router.get('/abc', (req, res) => {
  res.send('GET /abc');
});
router.post('/abc', (req, res) => {
  res.send('POST /abc');
});

router.route('/abc')
  .get((req, res) => {
    res.send('GET /abc');
  })
  .post((req, res) => {
    res.send('POST /abc');
  });