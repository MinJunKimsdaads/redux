import { makeAutoObservable } from 'mobx';

class ProductStore {
  products = [
    {
      id: 1,
      name: "제품1",
      price: 1000,
    },
    {
      id: 2,
      name: "제품2",
      price: 2000,
    },
    {
      id: 3,
      name: "제품3",
      price: 3000,
    },
    {
      id: 4,
      name: "제품4",
      price: 4000,
    },
    {
      id: 5,
      name: "제품5",
      price: 5000,
    },
  ];

  cart = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product) {
    this.cart.push(product);
  }

  removeFromCart(product) {
    this.cart = this.cart.filter((item) => item.id !== product.id);
  }
}

const productStore = new ProductStore();
export default productStore;