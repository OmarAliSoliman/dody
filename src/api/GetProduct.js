import Products from './products.json';

export function getProducts(){
  return Promise.resolve(Products);
}