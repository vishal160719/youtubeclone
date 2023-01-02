import express from "express";
import { addVideo, getByTag, getVideo, random, search, trend } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo)
router.get("/find/:id", getVideo)
router.get("/trend", trend)
router.get("/random", random)
router.get("/tags", getByTag)
router.get("/search", search)

export default router;
