'use strict';

var config = require('../../config/secrets');

module.exports = function(db, DataTypes) {
    var Order = db.define('Order', {
        sid: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        sess: {
            type: DataTypes.JSON,
            allowNull: false
        },
        expire: {
            type: DataTypes.DATE(6),
            allowNull: false
        }
    }, {
        tableName: config.orderTable,
        timestamps: false
    });

    return Order;
};