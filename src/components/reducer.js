// const reducer = (state,action)=>{

//     // if(action.type === "ADDTOCART") {

//     //    const itemCart = ()=>{
//     //         state.cart.filter((item)=>{
//     //         return item.id === action.payload
//     //     })
//     //    }
//     //       console.log(itemCart)
//     // }

    

//     if(action.type === "TOGGLE_QUANTITY"){
//        state.cart.map( (item)=>{
    
//             if(item.id === action.payload.id){
//                 if(action.payload.type === "increment"){
//                         return{
//                             ...item,
//                             quantity:item.quantity+1
//                     }
//                 }
//                     if(action.payload.type === "decrement"){
//                         return{
//                             ...item,
//                             quantity:item.quantity-1
//                         }
//                     }
//                 }
//         }
//         )
        
//         }
// }

// export default reducer;