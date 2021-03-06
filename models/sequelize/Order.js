'use strict';

var config = require('../../config/secrets');



module.exports = function(db, DataTypes) {
    var Order = db.define('Order', {
        sid: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        createdAt: DataTypes.DATE,
        products: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        userId: DataTypes.STRING
    }, {
        tableName: config.orderTable,
        timestamps: false
    });


    return Order;
};