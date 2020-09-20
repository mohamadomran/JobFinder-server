import cors from "cors";
import express from "express";

import { getAllGithubJobs, getGithubJobById } from "./routes/github-jobs";
import { getAllIndreedJobs } from "./routes/indreed-jobs";
import { getAllRemoteOkJobs } from "./routes/remoteok-jobs";

const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;
const buildPath = path.join(__dirname, "..", "build");

app.use(express.static(buildPath));

app.use(cors());

app.get("/github-joblist", getAllGithubJobs);

app.get("/github-joblist/:id", getGithubJobById);

app.get("/remoteok-joblist", getAllRemoteOkJobs);

app.get("/indreed-joblist", getAllIndreedJobs);

app.get("/indreed-job-type/:type", getAllIndreedJobs);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
