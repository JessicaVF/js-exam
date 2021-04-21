"use strict";
class Product {
  constructor(name = "", quantity = 0, price = 0.0) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}
class Cart {
  constructor(customer = "", products = []) {
    this.customer = customer;
    this.products = products;
  }
  addProduct(product) {
    if (!this.products.includes(product)) {
      this.products.push(product);
    }
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total = total + this.products[i].price;
    }
    return total;
  }
}

let beanie = new Product();
beanie.name = "Un bonnet bien chaud";
beanie.quantity = 2;
beanie.price = 19.99;

let short = new Product();
short.name = "Un short de sport";
short.quantity = 15;
short.price = 29.98;

let tShirt = new Product();
tShirt.name = "Un T-shirt";
tShirt.quantity = 176;
tShirt.price = 9.89;

let cart = new Cart();
cart.customer = "Moi";
cart.addProduct(beanie);
cart.addProduct(tShirt);

console.log(cart.getTotal());
