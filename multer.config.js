"use strict";

const path = require("path");
const multer = require("multer");

// Config Multer
const storageCareerFiles = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "./uploaded-files"));
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  }
});

const uploadCareerFiles = multer({
  storage: storageCareerFiles,
  dest: path.join(__dirname, "./uploaded-files"),
  limits: { fileSize: 1024 * 1024 * 20 } // 20MB
}).fields([
  {
    name: "logotype",
    maxCount: 1
  },
  {
    name: "studyPlanFile",
    maxCount: 1
  }
]);

const storageContentFiles = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "./publication-content-files"));
  },
  filename: (req, file, cb) => {
    const EXT = path.extname(file.originalname);
    cb(null, new Date().getTime() + EXT);
  }
});

const uploadContentFiles = multer({
  storage: storageContentFiles,
  dest: path.join(__dirname, "./publication-content-files"),
  limits: { fileSize: 1024 * 1024 * 50 } // 50MB
}).any();

module.exports = { uploadCareerFiles, uploadContentFiles };
