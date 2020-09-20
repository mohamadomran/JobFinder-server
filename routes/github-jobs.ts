import { Request, Response } from "express";
import axios from "axios";

export const getAllGithubJobs = async (req: Request, res: Response) => {
  try {
    let { description, full_time, location, page = 0 } = req.query;

    description = description ? encodeURIComponent(description.toString()) : "";
    location = location ? encodeURIComponent(location.toString()) : "";
    full_time = full_time === "true" ? "&full_time=true" : "";
    if (page) {
      page = parseInt(page.toString());
      page = isNaN(page) ? "" : `&page=${page}`;
    }

    const query = `https://jobs.github.com/positions.json?description=${description}&location=${location}&ful_tim=${full_time}&page=${page}`;
    const result = await axios.get(query);

    res.send(result.data);
  } catch (error) {
    res.status(400).send("Error while getting list of jobs. Try again later.");
  }
};

export const getGithubJobById = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;

    const query = `https://jobs.github.com/position/${id}.json`;
    const result = await axios.get(query);

    res.send(result.data);
  } catch (error) {
    res.status(400).send("Error while getting list of jobs. Try again later.");
  }
};
