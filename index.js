function receivesAFunction(callback) {
    callback();
};

function returnsANamedFunction () {
    return function returnsANamedFunction(){}
};

const returnsAnAnonymousFunction = (function(){
    return function (){}
});
