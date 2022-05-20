const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload
    switch(action.type){
        case "ADD_ITEM":
            // const exist = product.find((item) => item.id === product.id)
            // if(exist){
            //     return state.map((item) => item.id === product.id ? {...item} : item)
            // }else{
                // const product = action.payload
                // console.log(...product)
                return [...state,
                    product,
                ]
            // }
        

        case "DELETE_ITEM": 
            return state = state.filter((item) => {
                // return item.id !== product.id
                console.log("delete", item.id)
            })
           
            
        break;
        default:
            return state;
        break
    }
}
export default handleCart