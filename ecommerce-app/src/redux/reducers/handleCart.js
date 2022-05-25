const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload
    switch(action.type){
        case "ADD_ITEM":
            // const exist = state.find((item) => item.id === product.id)
            // if(exist){
            //     return state.map((item) => item.id === product.id ? {...item} : item)
            // }else{
                return [...state,
                    product
                ]
            // }
        

        case "DELETE_ITEM": 
            return state = state.splice(1)

        default:
            return state;
    }
}
export default handleCart