import { create, findAll, findById } from "../services/jobService.js";

export const createJob = async (req, res) => {
  try {
    const job = await create(req.body, req.user._id);
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await findAll();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await findById(req.params.id);
    res.json(job);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
