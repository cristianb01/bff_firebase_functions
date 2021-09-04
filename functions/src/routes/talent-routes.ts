import * as express  from 'express';

const router = express.Router();
const talentController = require('../controllers/talent-controller');

router.get('/relevant', talentController.relevant);
router.get('/news', talentController.news);

module.exports = router;