const express = require('express');
const router = express.Router();

const {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categories');

router.get('/', getAllCategories);
router.post('/', createCategory);
router.patch('/:articleId', updateCategory);
router.delete('/:articleId', deleteCategory);

module.exports = router;