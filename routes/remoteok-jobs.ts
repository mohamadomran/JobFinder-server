import { Request, Response } from "express";
import axios from "axios";

export const getAllRemoteOkJobs = async (req: Request, res: Response) => {
  try {
    let { tags = "", full_time, location = "", page = 1 } = req.query;

    tags = tags ? encodeURIComponent(tags.toString()) : "";
    location = location ? encodeURIComponent(location.toString()) : "";
    full_time = full_time === "true" ? "&full_time=true" : "";

    // tags could be a list of strings concatenated
    const query = `https://remoteok.io/api?tags=${tags}`;
    const result = await axios.get(query);

    res.send(result.data);
  } catch (error) {
    res.status(400).send("Error while getting list of jobs.Try again later.");
  }
};
