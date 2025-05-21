type Pizza = {
  id:number,
  name: string,
  price: number
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed"
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

const menu :Pizza[] = [
  {id: nextPizzaId++, name: "Margherita", price: 8 },
  {id: nextPizzaId++, name: "Pepperoni", price: 15 },
  {id: nextPizzaId++, name: "Hawaiian", price: 10 },
  {id: nextPizzaId++, name: "Veggie", price: 5 },
];

const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza):void {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string):Order|undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} doesn't exist in the menu.`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder :Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    throw new Error()
  }
  order.status = "completed";
  return order;
}

export function getPizzaDetail(identifier:string|number):Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find((pizza)=>pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
  }else if(typeof identifier === "number"){
    return menu.find((pizza)=>pizza.id === identifier)
  } else {
    throw new TypeError(`Parame ter ${identifier} must be either string or number`)
  }
}


addNewPizza({id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({id: nextPizzaId++,name: "BBQ Chicken", price: 10 });
addNewPizza({id: nextPizzaId++, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash In Register: ", cashInRegister);
console.log("Order Queue: ", orderQueue);

console.log(getPizzaDetail(1));
