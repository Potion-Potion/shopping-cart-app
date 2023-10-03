// import { CollectionsBookmarkOutlined, ConstructionOutlined } from "@mui/icons-material";
import React from "react";
import {useContext,createContext,useState,useEffect} from "react"
// import { popularProducts } from "../data";
// import reducer from "./reducer"

// const initState = {
//     cart:popularProducts,
//     total:0,
//     amount:0,
//     cartTotal:0
// }

const CartProvider=({children})=>{
    // const [state,dispatch] = useReducer(reducer,initState)
    
    // const [chooseImage,setChooseImage] = useState("")
 
    // const [currentItem,setCurrentItem] = useState([]) 
    
    const [itemWishlist,setItemWishList] = useState([])
    
    const [chooseCart,setChooseCart] = useState([])

    const [itemFilterList,setItemFilterList] = useState([])

    const [showCart,setShowCart] = useState(false)

    const [showOverlay,setShowOverlay] = useState(false)

    const [sum,setSum] = useState ()

    const [checkItem,setCheckItem] = useState ("")

    const [loading,setLoading] = useState(false)

// -----------------------------------timeLoading-------------------------------

    const timeLoading = (item) =>{
        setLoading(true);
        setTimeout(()=>{
        addWishListCart(item);
        setShowOverlay(false);
        setLoading(false);
        setShowCart(true);
        }, 1000);
}

// -----------------------------------Item In Cart-------------------------------

    const addToCart = (product) => {

        // const newItem = popularProducts.find(item => item.id === product )
        // setChooseCart(chooseCart.concat(newItem));

        const exist = chooseCart.find((x) => x.id === product.id); 
        setItemWishList([product])

        if(itemWishlist) {
            setShowOverlay(true)
            setShowCart(false)
        }
        else {
            setShowOverlay(!showOverlay);
            setChooseCart([...chooseCart, {...product, quantity:1}]
            )
        }

        if (exist) {
            exist.quantity < 10 &&
            setChooseCart(
            chooseCart.map((x) => 
            // {
            //     if(x.id === product.id) {
            //        return {...x, quantity: x.quantity + 5}
            //     }
            //     else{
            //         return x
            //     }
            // }
            x.id === product.id ? {...x, quantity: x.quantity + 5} : x
        ))
        }
    
    }; 
    const toggleQuantity = (item,type)=>{
        if (type === "increment" && item.quantity < 10) {
            setChooseCart(chooseCart.map(x =>  x.id === item.id ?
                {...x, quantity: x.quantity + 1} : x)
                )}
        if (type === "Decrement" && item.quantity > 0) {
            setChooseCart(
            chooseCart.map( (x) => x.id === item.id ?
            {...x, quantity: x.quantity - 1}
           : x ).filter( x => x.quantity !== 0)
           )}   
    }
    // --------------------------------- Shopping Bag ----------------------------------

    const chooseItem = (product) => {
        setItemWishList([product]);
    }

    const addWishListCart = (item) => {
        const existWishList = chooseCart.find((x) => x.id === item.id);
        setItemWishList([])
        if (existWishList) {
            setChooseCart(
              chooseCart.map( (x) =>{
              if (x.quantity + item.quantity <= 10){
                return { ...x, quantity: x.quantity + item.quantity }
              }
              else if(x.quantity + item.quantity >= 10){
                return { ...x, quantity: x.quantity = 10}
              }
            }));
          }
        else{
            setChooseCart([...chooseCart, {...item, quantity: item.quantity}])
           }
    }   
    
    const toggleWishList = (item,type) => {
        
        if (type === "increment" && item.quantity < 10) {
            setItemWishList([{...item,quantity: item.quantity + 1}])
        }
        if (type === "Decrement" && item.quantity > 1) {
            setItemWishList([{...item,quantity: item.quantity - 1}])
        }
    }

    // --------------------------------- ItemWishList ----------------------------------

    const chooseCurrentItem = (item) => {
        const existFilterList = itemFilterList.find(product => product.id === item.id)
        
        if (existFilterList) {
        setItemFilterList(itemFilterList)
        }
        else setItemFilterList([...itemFilterList,item])
    }
        

     useEffect (()=>{
        const total = chooseCart.map(({price,quantity})=>{
            return price*quantity
        })
        const totalPrice = total.reduce((before,current) =>
             before+current , 0
        )
        setSum(totalPrice)
     },[chooseCart])  

    return(
        <CartContext.Provider value={{addToCart,chooseItem,setChooseCart
                                    ,toggleQuantity,chooseCart,itemWishlist,
                                    toggleWishList,itemFilterList,setItemFilterList
                                    ,addWishListCart,chooseCurrentItem,setShowCart,
                                    showCart,sum,setShowOverlay,showOverlay,
                                    setCheckItem,checkItem,timeLoading,loading}}>
            {children}
        </CartContext.Provider>
    )
}


const CartContext = createContext()
export const MyCartContext = ()=>{
    return useContext(CartContext)  
} 

export {CartContext,CartProvider};