import Job from "../models/Job.js";

export const create = async (jobData, userId) => {
  const job = await Job.create({ ...jobData, createdBy: userId });
  return job;
};

export const findAll = async () => {
  return await Job.find().populate("createdBy", "name email");
};

export const findById = async (id) => {
  const job = await Job.findById(id).populate("createdBy", "name email");
  if (!job) throw new Error("Job not found");
  return job;
};
