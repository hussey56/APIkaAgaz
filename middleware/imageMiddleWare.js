const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
     const uniqueName = `${Date.now()}+${file.originalname}`;
      cb(null,uniqueName)
    }
  });
module.exports = multer({storage:storage});
