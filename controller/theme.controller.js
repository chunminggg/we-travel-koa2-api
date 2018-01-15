var mongoose = require('mongoose')
var ThemeModel = require('../model/theme.model')
var ThemeDb = require('../db/theme.db')
exports.save = async(ctx, next) => {
    let theme = new ThemeModel({
        name : ctx.request.body.name,
        describe: ctx.request.body.describe,
        themeSign: ctx.request.body.themeSign
    })
    let isShow = await ThemeDb.findByName({name:ctx.request.body.name})
    if(isShow){
        ctx.body = {
            message:'have theme',
            data:ctx.request.body
        }
    }
    else {
        theme = await theme.save()
        if(theme){
            ctx.body = {
                message: 'save success',
                data: theme
            }
        }
    }
   
}
exports.findAll = async(ctx, next) =>{
    let data = await ThemeDb.findAllThemes()
    ctx.body = {
        message:'success',
        data
    }
}