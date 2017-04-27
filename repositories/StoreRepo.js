/**
 * Created by boris on 4/27/17.
 */

var db = require('../models/sequelize');


var store = {};

store.GetAllStores = function(){
    return db.Store.findAll()
}

module.exports = store;