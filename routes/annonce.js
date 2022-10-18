const router = require('express').Router();
const annonceController = require('../controllers/annonce.controllers.js');
const middleware = require('../middleware');
const multer = require('../middleware/multer-config');


router.post('/create',middleware.checkAuthenticated, multer, annonceController.createAnnonce);

router.get('/create',middleware.checkAuthenticated,middleware.roles,annonceController.createannonce);

router.get('/create',middleware.checkAuthenticated,middleware.roles, function(req, res) {
    res.render('/annonce/creeAnnonce', { user: req.user});
});

router.get('/', annonceController.readAnnonce);

router.get('/delete/:id',middleware.checkAuthenticated,middleware.roles, annonceController.deleteAnnonce);

router.get('/comment-annonce/:id',middleware.checkAuthenticated, annonceController.commentannonce);

router.post('/comment/:id',middleware.checkAuthenticated, annonceController.commentAnnonce);


router.get('/update/:id',middleware.checkAuthenticated, middleware.roles, annonceController.updateAnnonce);
router.post('/update-annonce/:id',middleware.checkAuthenticated,middleware.roles,multer, annonceController.update_Annonce);

router.get('/voirCommenter/:id', annonceController.voirCommenter);



module.exports = router;