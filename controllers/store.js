/**
 * Created by boris on 4/27/17.
 */

let StoreRepo = require('../repositories/StoreRepo.js');


exports.GetAllStores = function(req, res){
    StoreRepo.GetAllStores().then((stores) => {
        res.json(stores)
    })
};

exports.CreateProduct = function(req, res){
    StoreRepo.CreateStubProduct().then(() => {
        res.send("done")
    }).catch((e) => {
        res.send(e)
    })
};

exports.CreateStore = function(req, res){
    StoreRepo.CreateStubStore().then(() => {
        res.send("done")
    }).catch((e) => {
        res.send(e)
    })
};