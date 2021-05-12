const express = require("express")
const multer = require("multer")
const path = require('path')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.ogirinalname+'.jpg')
  },
})
const upload = multer({ storage })

module.exports = upload;