import {productById} from "./catalog.js";
const STORAGE="the-beef-shop-cart-v1";
export function getCart(){try { const raw=JSON.parse(localStorage.getItem(STORAGE)||"{}");return Object.fromEntries(Object.entries(raw).filter(([id,n])=>productById(id)&&Number.isInteger(n)&&n>0&&n<=99));}catch{return {};}}
export function saveCart(cart){localStorage.setItem(STORAGE,JSON.stringify(cart));window.dispatchEvent(new CustomEvent("bishop-cart-change"));}
export function addToCart(id){if(!productById(id))return;const cart=getCart();cart[id]=Math.min(99,(cart[id]||0)+1);saveCart(cart);}
export function setQuantity(id,q){const cart=getCart();if(q<=0)delete cart[id];else cart[id]=Math.min(99,Math.max(1,q));saveCart(cart);}
export function countItems(){return Object.values(getCart()).reduce((a,b)=>a+b,0);}
export function cartLines(){return Object.entries(getCart()).map(([id,quantity])=>({product:productById(id),quantity})).filter(x=>x.product);}
export function clearCart(){saveCart({});}
