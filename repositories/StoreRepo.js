/**
 * Created by boris on 4/27/17.
 */

var db = require('../models/sequelize');


var repo = {};

repo.GetAllStores = function(){
    return db.Store.findAll()
}

repo.GetAllStoresWithProducts = function(){
    return db.Store.findAll().then((stores) => {
        stores.map(() => {

        })
    })
}

repo.CreateStubProduct = function(){
    return db.Product.create({
        sid: Date.now().toString(),
        name: "Big Mac",
        price: 4.99,
        currency: "USD",
        img: "https://www.google.co.il/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwiUwO65r8XTAhXKuxQKHQeYDfsQjRwIBw&url=http%3A%2F%2Fwww.epicurious.com%2Frecipes%2Ffood%2Fviews%2Fthe-ultimate-hamburger-232191&psig=AFQjCNGPW7q4qtoBNVoAmAjT4d5-4HCNBQ&ust=1493407724393479"
    });
}

repo.CreateStubStore = function(){
    return db.Store.create({
        sid: Date.now().toString(),
        name: "McDonald\'s",
        createdAt: Date.now(),
        products: ["1493322205410", "1493323084657"]
    });
}


repo.GetAllProductsForStore = function(storeId){
    return db.Product.findOne({sid: storeId})
}




module.exports = repo;