const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: String,
  desc: String,
  author: String,
});

mongoose.connect('mongodb://localhost:27017/Blog')
  .then(db => console.log(`[OK] DB is connected`))
  .catch(err => console.error(err));

const Article = mongoose.model('Article', ArticleSchema)

module.exports = { Article, ObjectId };
