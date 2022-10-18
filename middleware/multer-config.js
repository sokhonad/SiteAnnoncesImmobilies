const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/images");
  },

  //add back the extension
  filename: function (request, file, callback) {
    console.log(file,"ffffffffffffffffffffffffff");
    callback(null, Date.now() + file.originalname);
  },
});

module.exports = multer({storage: storage}).single('uploaded_file');