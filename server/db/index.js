const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const { Schema } = mongoose;
const dbUrl = 'mongodb+srv://kukurikaanna:O1RhE2mchGTxL7ve@annakhizhniak.fywagbl.mongodb.net/?retryWrites=true&w=majority&appName=AnnaKhizhniak';

const ArticleSchema = new Schema({
  title: String,
  desc: String,
  author: String,
});

async function init() {
  try {
    await mongoose.connect(dbUrl, { dbName: 'Blog' });
    console.log('Mongo DB connected');
  } catch (error) {
    console.log('Mongo DB did not connected');
    console.log(error);
    process.exit(1);
  }
}
init();

const Article = mongoose.model('Article', ArticleSchema)

module.exports = { Article, ObjectId };
