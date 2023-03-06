// state initiale : le "panier = tableau"
const initialState = {
    cart : []
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "ADDITEM" :
            const indexItemAdd = state.cart.findIndex(obj => obj.id === action.payload.id);

            if(indexItemAdd !== -1) {
                const updateQuantity = {
                    ...state.cart[indexItemAdd],   
                    quantity: state.cart[indexItemAdd].quantity + action.payload.quantity
                } 

                const newTab = [...state.cart]
                newTab.splice(indexItemAdd, 1, updateQuantity);

                return {
                    cart: newTab
                }

            } else {
                const newArr = [ ...state.cart]
                newArr.push(action.payload)

                return {
                    cart: newArr
                }
            };         

        case "UPDATEITEM" : 
            //1. on doit retrouver l'index de notre produit qu'on va mettre à jour
            const indexItemUpdate = state.cart.findIndex(obj => obj.id === action.payload.id);

            // 2. On copie l'ancien state
            const newArr = [...state.cart];

            // 3. remplacer l'ancien objet par le nouveau
            newArr.splice(indexItemUpdate, 1, action.payload) //suppression et remplacement 
            // 4.
            return {
                cart: newArr
            }
        
        default: return state;
    }
}