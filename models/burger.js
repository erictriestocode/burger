// burger.js model file
// As per other files, lots of inspiration from the last few assignments on how to set this up

let orm = require("../config/orm.js");

let burger = {
    all: function(cb){
        orm.all("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals,condition,cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
    
}

module.exports = burger;