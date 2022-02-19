const Router = require('express');
const controller = require('../controller/controller')

const router = Router();

router.get('/', () => console.log('1234'));
router.get('/', () => controller.getlocation());

module.exports = router;