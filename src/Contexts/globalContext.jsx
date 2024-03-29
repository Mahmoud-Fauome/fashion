import { createContext } from "react";

const Store =createContext({
    productsData:[],
    addToShoping:[],
    usersData   :[],
    addToShoping:0,
    addToCart:()=>{},
    deletCart:()=>{},
    addNumber:()=>{},
    minusNumber:()=>{},
})

export default Store;