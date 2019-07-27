const express = require("express");

const Article = require("../models/blog.model");

const router = express.Router();

router.post("/newblog", (req, res, next) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
    createdAt: req.body.createdAt
  });

  article.save().then(createdArticle => {
    res.status(201).json({
      message: "Article created with success",
      article: {
        ...createdArticle,
        id: createdArticle._id
      }
    });
  });
});

router.get("/allblogs", (req, res, next) => {
  Article.find().then(articles => {
    res.status(200).json(articles);
  });
});

router.get("/:id", (req, res, next) => {  
  Article.findById(req.params.id).then(article => {
    if (article) {     
      res.status(201).json(article);
    } else {
      res.status(404).json({ message: "Article not found! " });
    }
  });
});

router.put("/:id", (req, res, next) => {  
  const article = new Article({
    _id: req.params.id,
    title: req.body.title,
    content: req.body.content,
    createdAt: req.body.createdAt
  });

  Article.updateOne({ _id: req.params.id }, article)
    .then(result => {
      res.status(200).json({ message: "Update Successfull!" });
    })
    .catch(err => {
      res.status(404).json({ error: err });
    });
});

router.delete("/:id", (req, res, next) => {
  Article.deleteOne({ _id: req.params.id })
    .then(result => {
      res.status(200).json({ message: "Article deleted with success!" });
    })
    .catch(err => {
      res.status(404).json({ error: err });
    });
});

module.exports = router;
