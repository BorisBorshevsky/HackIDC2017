/**
 * Created by boris on 4/27/17.
 */

let StoreRepo = require('../repositories/StoreRepo.js');


exports.getAllStores = function(req, res){
    StoreRepo.GetAllStores().then((stores) => {
        res.json(stores)
    })
};