const express = require('express')
const router = express.Router()

router.get('/turniej/', (req,res)=>{
    res.render('turniej')
})
router.get('/turniej/1', (req,res)=>{
    res.render('turniej1')
})
module.exports = router