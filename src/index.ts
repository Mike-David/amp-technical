console.log('Hello, Webpack and TypeScript!');
import './tailwind.css';

interface Product {
    id: number;
    name: string;
    price: number;
    available: boolean;
}

const product: Product = (window as any).productData;

const logResponse = () => {
    console.log(product.available ? `${product.name} is in stock!` : `${product.name} is out of stock!`)
};

const buyNowBtn = document.getElementById("BuyButton");
buyNowBtn?.addEventListener("click", logResponse);


