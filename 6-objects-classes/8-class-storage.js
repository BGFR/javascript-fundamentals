// 8. Class Storage 

class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
    }
    getProducts() {
        let result = [];
        this.storage.forEach((product) => {
            console.log(JSON.stringify(product));
            result.push(JSON.stringify(product));
        });
    }

    get totalCost() {
        let totalCost = 0;
        this.storage.forEach((product) => {
            totalCost += product.quantity * product.price;
        });
        return totalCost;
    }
}

let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
