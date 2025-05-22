"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId = 1;
var menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 15 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 5 },
];
var orderQueue = [];
function addNewPizza(pizzaObj) {
    var newPizza = __assign({ id: nextPizzaId++ }, pizzaObj);
    menu.push(newPizza);
    return newPizza;
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " doesn't exist in the menu."));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("".concat(orderId, " was not found in the orderQueue"));
        throw new Error();
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError("Parame ter ".concat(identifier, " must be either string or number"));
    }
}
addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 10 });
addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu: ", menu);
console.log("Cash In Register: ", cashInRegister);
console.log("Order Queue: ", orderQueue);
console.log(getPizzaDetail(1));
