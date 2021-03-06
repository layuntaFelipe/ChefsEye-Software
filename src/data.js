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

export const userProfitArray = [
    {
        id: 1,
        time: '2022-11-18T21:31:17.178Z',
        userGain: 80000,
        userLost: 50000,
        mostOrderedItems: [`Chef's Burger`, `Coke`, `Salad`],
    },
    {
        id: 2,
        time: '2022-11-19T21:31:17.178Z',
        userGain: 8000,
        userLost: 3200,
        mostOrderedItems: [`Chef's Burger`, `Salad`],
    },
    {
        id: 3,
        time: '2022-11-20T21:31:17.178Z',
        userGain: 6000,
        userLost: 8000,
        mostOrderedItems: [`Chef's Burger`, `Coke`, `Salad`],
    },
    {
        id: 4,
        time: '2022-11-21T21:31:17.178Z',
        userGain: 10000,
        userLost: 4000,
        mostOrderedItems: [`Chef's Burger`, `Coke`, `Salad`],
    },
    {
        id: 5,
        time: '2022-11-22T21:31:17.178Z',
        userGain: 6000,
        userLost: 7500,
        mostOrderedItems: [`Chef's Burger`, `Salad`],
    },
    {
        id: 6,
        time: '2022-11-23T21:31:17.178Z',
        userGain: 8000,
        userLost: 5000,
        mostOrderedItems: [`Chef's Burger`, `Coke`, `Salad`],
    },
    {
        id: 7,
        time: '2022-11-24T21:31:17.178Z',
        userGain: 8000,
        userLost: 1000,
        mostOrderedItems: [`Salad`],
    },
      
]

export const userStorageArray = [
    {
        id: 1,
        time: '2022-11-18T21:31:17.178Z',
        storageReload: 100,
        storageReloadItems: ['Bread', 'Coke', 'Tomato', 'Chicken'],
        storageLostItems: [''],
        storageLost: 0,
        mostItemStored: ['Tomato']
    },
    {
        id: 2,
        time: '2022-11-19T21:31:17.178Z',
        storageReload: 0,
        storageReloadItems: [''],
        storageLostItems: ['Coke'],
        storageLost: 5,
        mostItemStored: ['']
    },
    {
        id: 3,
        time: '2022-11-20T21:31:17.178Z',
        storageReload: 0,
        storageReloadItems: [''],
        storageLostItems: ['Bread', 'Tomato', 'Chicken'],
        storageLost: 15,
        mostItemStored: ['']
    },
    {
        id: 4,
        time: '2022-11-21T21:31:17.178Z',
        storageReload: 0,
        storageReloadItems: [''],
        storageLostItems: ['Bread', 'Coke', 'Tomato', 'Chicken'],
        storageLost: 23,
        mostItemStored: ['']
    },
    {
        id: 5,
        time: '2022-11-22T21:31:17.178Z',
        storageReload: 12,
        storageReloadItems: ['Bread', 'Tomato', 'Chicken'],
        storageLostItems: ['Chicken'],
        storageLost: 0,
        mostItemStored: ['Bread']
    },
    {
        id: 6,
        time: '2022-11-23T21:31:17.178Z',
        storageReload: 0,
        storageReloadItems: [''],
        storageLostItems: ['Bread', 'Tomato', 'Chicken'],
        storageLost: 9,
        mostItemStored: ['']
    },
    {
        id: 7,
        time: '2022-11-24T21:31:17.178Z',
        storageReload: 0,
        storageReloadItems: [''],
        storageLostItems: ['Bread', 'Coke', 'Tomato'],
        storageLost: 5,
        mostItemStored: ['']
    },
]