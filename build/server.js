"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var github_jobs_1 = require("./routes/github-jobs");
var indreed_jobs_1 = require("./routes/indreed-jobs");
var remoteok_jobs_1 = require("./routes/remoteok-jobs");
var path = require("path");
var app = express_1.default();
var PORT = process.env.PORT || 5000;
var buildPath = path.join(__dirname, "..", "build");
app.use(express_1.default.static(buildPath));
app.use(cors_1.default());
app.get("/github-joblist", github_jobs_1.getAllGithubJobs);
app.get("/github-joblist/:id", github_jobs_1.getGithubJobById);
app.get("/remoteok-joblist", remoteok_jobs_1.getAllRemoteOkJobs);
app.get("/indreed-joblist", indreed_jobs_1.getAllIndreedJobs);
app.get("/indreed-job-type/:type", indreed_jobs_1.getAllIndreedJobs);
app.listen(PORT, function () {
    console.log("server started on port " + PORT);
});
