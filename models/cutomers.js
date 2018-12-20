var db      = require('../db/config');
var customers = {};


customers.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM users;")
    .then(function(result){
        res.locals.customers = result;
        next()
    }).catch(function(error){
        console.log(error);
        next();
    });
};


customers.find = function(req, res, next){
    db.one("SELECT * FROM users WHERE id=$1;", [req.params.id])
    .then(function(result){
        res.locals.user = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

cars.update = function(req, res, next){
    db.one("UPDATE cars SET name=$1, email=$2, phone=$3 WHERE id=$5 RETURNING id;", 
    [req.body.name, req.body.email, req.params.id])
    .then(function(result){
        res.locals.customerId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

customers.create = function(req, res, next){
    db.one("INSERT INTO customers(name, email, phone) VALUES($1, $2, $3) RETURNING id;", 
    [req.body.name, req.body.email, req.body.phone, req.params.id])
    .then(function(result){
        res.locals.studentId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

customers.delete = function(req, res, next){
    db.manyOrNone("DELETE FROM users WHERE id=$1;", [req.params.id])
    .then(function(){
        next()
    }).catch(function(error){
        console.log(error);
        next();
    });
};

customers.findByCourse = function(req, res, next){
    db.manyOrNone("SELECT * FROM cars WHERE id=$1;", [req.params.id])
    .then(function(result){
        res.locals.student = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};



module.exports = customers;