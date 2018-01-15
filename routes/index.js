const router = require('koa-router')()
var themeModel = require('../model/theme.model')
const Theme = require('../controller/theme.controller')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/theme',Theme.save)
router.get('/theme',Theme.findAll)
module.exports = router
