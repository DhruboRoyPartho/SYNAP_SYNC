const express = require('express');
const jobController = require('../controllers/jobController');


const router = express.Router();

router.post('/job_post', jobController.createJobPost);
router.get('/job_post', jobController.getJobPosts);

module.exports = router;