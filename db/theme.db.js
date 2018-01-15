var Theme = require('../model/theme.model')

exports.findByName = async({name}) => {
    let query = Theme.find({name})
    let res = null
    await query.exec(function(err, theme){
        if(err){
            res = {}
        }
        else {
            res = theme
        }
    })
    return res
}
exports.findAllThemes = async() =>{
    let query = Theme.find({})
    let res = []
    await query.exec(function(err, themes){
        if(err){
            res = []
        }
        else{
            res = themes
        }
    })
    return res
}