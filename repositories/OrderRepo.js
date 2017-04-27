/**
 * Created by boris on 4/27/17.
 */

var db = require('../models/sequelize');


var order = {};

order.GetAllOrders = function(){
    return db.Order.findAll()
}




module.exports = order;