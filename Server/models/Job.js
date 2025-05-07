const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company: { type: String, required: true },
    job_title: { type: String, required: true },
    skills: {
        dsa: { type: Number, required: true },
        problem_solving: { type: Number, required: true }
    },
    salary: { type: Number, required: true },
    type: { type: String, enum: ['remote', 'on-site'], required: true }
});

module.exports = mongoose.model('Job', jobSchema);
