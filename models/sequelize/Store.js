'use strict';

var config = require('../../config/secrets');


module.exports = function(db, DataTypes) {
    var Store = db.define('Store', {
        sid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        products: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    }, {
        tableName: 'stores',
        timestamps: false
    });


    return Store;
};