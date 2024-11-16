import { Router } from "express";
import { download, videoInfo } from "../controllers/downloadController";

const downloadRoute = Router();
const downloadMiddleware = (req, res, next) => {
  const { url, videoOptions } = req.body;
  if (!url || !videoOptions) {
    res.status(400).send({ message: "url and videoOptions are required" });
  }
  next();
};

const videoInfoMiddleware = (req, res, next) => {
  const { url, videoOptions } = req.body;
  if (!url || !videoOptions) {
    res.status(400).send({ message: "url and videoOptions are required" });
  }
  next();
};

downloadRoute.get("/:url", videoInfoMiddleware, async (req, res) => {
  const { url } = req.params;
  res.send(`url: ${url}`);
});

downloadRoute.post("/", routeMiddleware, async (req, res) => {
  try {
    const { url, videoOptions } = req.body;
    res.send(`url: ${url}, videoOptions: ${videoOptions}`);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default downloadRoute;
