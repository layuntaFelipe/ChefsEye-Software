// class User{
//     constructor(name, email, password, payment){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.payment = payment;
//     }
// }

// class Restaurant {
//     constructor(name, ownerAccount, income, outcome, storage, menuID){
//         this.name = name;
//         this.ownerAccount = ownerAccount
//         this.income = income;
//         this.outcome = outcome;
//         this.storage = storage;
//         this.menuID = menuID;
//     }
// }

// class Menu {
//     constructor(menuID, menuName, food){
//         this.menuID = menuID;
//         this.menuName = menuName;
//         this.food = food;
//     }
// }

class Food {
    constructor(id, name, ingredients, price, time, image){
        this.id = id
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.time = time;
        this.image = image;
    }
}

export const lastOrders = [
    {
        id: '1',
        name: `Chef's Burger`,
        price: 14.99,
        image: require('./images/burger.svg').default,
        timeAgo: 12,
    },
    {
        id: '2',
        name: `Chicken Wings`,
        price: 10.99,
        image: require('./images/chicken-wings.svg').default,
        timeAgo: 34,
    },
    {
        id: '3',
        name: `Coke Can`,
        price: 3.99,
        image: require('./images/coke-can.svg').default,
        timeAgo: 34,
    },
    {
        id: '4',
        name: `Combo Burger`,
        price: 20.99,
        image: require('./images/combo-burger.svg').default,
        timeAgo: 45,
    },
    {
        id: '5',
        name: `Chicken Salad`,
        price: 24.99,
        image: require('./images/salad-chicken.svg').default,
        timeAgo: 53,
    },
];

export const menuArray = [
    new Food('1',`Chef's Burger`, ['bread', 'burger', 'lettuce', 'tomato'], 14.99, 10, require('./images/burger.svg').default),
    new Food('2',`Combo Burger`, ['bread', 'burger', 'lettuce', 'tomato'], 20.99, 10, require('./images/combo-burger.svg').default),
    new Food('3',`Chicken Wings`, ['bread', 'burger', 'lettuce', 'tomato'], 10.99, 10, require('./images/chicken-wings.svg').default),
    new Food('4',`Chicken Salad`, ['bread', 'burger', 'lettuce', 'tomato'], 24.99, 10, require('./images/salad-chicken.svg').default),
    new Food('4',`Coke Can`, ['bread', 'burger', 'lettuce', 'tomato'], 3.99, 10, require('./images/coke-can.svg').default),
    new Food('4',`Coke Can`, ['bread', 'burger', 'lettuce', 'tomato'], 3.99, 10, require('./images/coke-can.svg').default),
    new Food('4',`Coke Can`, ['bread', 'burger', 'lettuce', 'tomato'], 3.99, 10, require('./images/coke-can.svg').default),
    new Food('4',`Coke Can`, ['bread', 'burger', 'lettuce', 'tomato'], 3.99, 10, require('./images/coke-can.svg').default),
];

export const storageArray = [
    {
        isPositive: true,
        value: 12,
    },
    {
        isPositive: true,
        value: 10,
    },
    {
        isPositive: false,
        value: 5,
    },
    {
        isPositive: false,
        value: 15,
    },
    {
        isPositive: true,
        value: 30,
    },
    {
        isPositive: false,
        value: 3,
    },
];

export const lastProfitArray = [
    {
        isPositive: true,
        value: 543.99,
    },
    {
        isPositive: false,
        value: 123.32,
    },
    {
        isPositive: false,
        value: 100.49,
    },
    {
        isPositive: true,
        value: 155.65,
    },
    {
        isPositive: true,
        value: 332.45,
    },
    {
        isPositive: false,
        value: 140.54,
    },
];