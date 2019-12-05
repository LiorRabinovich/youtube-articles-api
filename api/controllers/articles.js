const mongoose = require('mongoose');
const Article = require('../models/article');

module.exports = {
    getAllArticles: (req, res) => {
        Article.find().then((articles) => {
            res.status(200).json({
                articles
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    createArticle: (req, res) => {
        const { title, description, content } = req.body;

        const article = new Article({
            _id: new mongoose.Types.ObjectId(),
            title,
            description,
            content
        });

        article.save().then(() => {
            res.status(200).json({
                message: 'Created article'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    getArticle: (req, res) => {
        const articleId = req.params.articleId;

        Article.findById(articleId).then((article) => {
            res.status(200).json({
                article
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    updateArticle: (req, res) => {
        const articleId = req.params.articleId

        Article.update({_id: articleId}, req.body).then(() => {
            res.status(200).json({
                message: 'Article Updated'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    deleteArticle: (req, res) => {
        const articleId = req.params.articleId

        Article.remove({_id: articleId}).then(() => {
            res.status(200).json({
                message: `Article _id:${articleId} Deleted`
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    }
}