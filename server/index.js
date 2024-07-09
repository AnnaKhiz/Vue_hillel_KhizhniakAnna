const express = require('express')
const router = express.Router()
const { Article, ObjectId } = require('../server/db');
const app = express()
const path = require('path');
const history = require('connect-history-api-fallback');
const cors = require('cors');

app.set('port', 3000);
app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

router.get('/', async( req, res) => {
  const result = await Article.find()
  res.send({"data": result})
})

router.post('/', async (req, res) => {
  const { body : newArticle } = req
  const article = new Article(newArticle);
  const result = await article.save();
  if (!result) {
    res.send({"result": "Article did not add!"})
  } else {
    res.send({"result": "Article was added successfully", "data": article})
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const result = await Article.findOne({ _id: new ObjectId(id)})
  res.send({"data" : result} )
})

app.use('/api/articles', router)

const staticFileMiddleware = express.static(path.join(__dirname, '../dist'));
app.use(staticFileMiddleware);

app.use(history());
app.use(staticFileMiddleware);
