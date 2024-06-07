const express = require('express');
const {
    createJob,
    getAllJobs,
    getJobById,
    updateJobById,
    deleteJobById,
    filterJobs
} = require('../controllers/jobController');
const authMiddleware = require('../middlewares/authMiddleware'); // Sử dụng middleware nếu cần
const router = express.Router();

router.post('/', authMiddleware, createJob);
router.get('/', getAllJobs);
router.post('/filter', filterJobs);
router.get('/:id', getJobById);
router.put('/:id', authMiddleware, updateJobById);
router.delete('/:id', authMiddleware, deleteJobById);

module.exports = router;