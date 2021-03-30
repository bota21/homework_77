const express = require("express");
const multer = require('multer');
const config = require('../config');
const path = require('path');
const { nanoid } = require("nanoid");
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cd) => {
        cd(null, nanoid() + path.extname(file.originalname));
    }
});

const uploads = multer({storage});

const createRouter = (db) => {
  router.get("/", (req, res) => {
    const data = db.getItem();
    res.send(data);
  });
  router.post("/", uploads.single('image'), (req, res) => {
    const id = nanoid();
    const newData = { ...req.body, id };
    if(req.file) {
         newData.image = req.file.filename;
     }
    if (req.body.message) {
       if(!req.body.author) {
           newData.author = 'Anonymous';
       }
      res.status(200).send(newData);
      db.addItem(newData);
    } else {
      res.status(400).send({ error: "Message not found" });
    }
  });
  return router;
};

module.exports = createRouter;
