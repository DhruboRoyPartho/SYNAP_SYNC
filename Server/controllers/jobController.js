const {jobCollection} = require('../collections');
// POST /expert/job_post
exports.createJobPost = async (req, res) => {
    try {
        const jobData = {
            company: req.body.company,
            job_title: req.body["job title"],
            skills: {
                dsa: req.body.skills.dsa,
                problem_solving: req.body.skills["problem solving"]
            },
            salary: req.body.salary,
            type: req.body.type
        };

        // const newJob = new Job(jobData);
        // await newJob.save();
        // res.status(201).json({ message: 'Job post created', job: newJob });

        const result = await jobCollection.insertOne(jobData);
        res.status(200).json({message: 'job posr created', job: jobData});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET /expert/job_post
exports.getJobPosts = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
