import { Request, Response } from "express";
import axios from "axios";

export const getAllIndreedJobs = async (req: Request, res: Response) => {
  try {
    let { location = "", country = "" } = req.query;

    location = location ? encodeURIComponent(location.toString()) : "";

    // tags could be a list of strings concatenated
    const query = `https://indreed.herokuapp.com/api/jobs?l=${location}&country=${country}`;
    const result = await axios.get(query);

    res.send(result.data);
  } catch (error) {
    res.status(400).send("Error while getting list of jobs.Try again later.");
  }
};

export const getIndreedJobByType = async (req: Request, res: Response) => {
  try {
    let { jobType } = req.params;

    jobType = jobType ? encodeURIComponent(jobType.toString()) : "";

    // tags could be a list of strings concatenated
    const query = `https://indreed.herokuapp.com/api/jobs?q=${jobType}`;
    const result = await axios.get(query);

    res.send(result.data);
  } catch (error) {
    res.status(400).send("Error while getting list of jobs.Try again later.");
  }
};
