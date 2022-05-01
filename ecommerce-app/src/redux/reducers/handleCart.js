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
            return state = state.filter((x) => {
                return x.id !== product.id
            })
        break;
        default:
            return state;
        break
    }
}
export default handleCart