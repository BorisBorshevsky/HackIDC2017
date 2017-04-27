'use strict';

var config = require('../../config/secrets');

module.exports = function(db, DataTypes) {
    var Product = db.define('Product', {
        sid: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: config.productTable,
        timestamps: false
    });

    return Product;
};