const ADD_ITEM = 'ADD_ITEM'
const CHECK_ITEM = 'CHECK_ITEM'

const initialItemsState = [{purchased: true, name: 'JASON', price: 'too expensive'}, {purchased: false, name: 'Mark', price: 'too expensive'}, {purchased: false, name: 'Erich', price: 'too expensive'}]


const initialItemState = {
    purchased: false,
    name: '',
    price: '',
}

export function addItem (purchased, name, price) {
    return {
        type: ADD_ITEM,
        purchased,
        name,
        price
    }
}

export function checkItem (name) {
    return {
        type: CHECK_ITEM,
        name
    }
}

export default function items (state = initialItemsState, action) {
    switch(action.type) {
        // case ADD_ITEM:
        //     return {
        //         ...state,
        //         pruchased
        //     }
        case CHECK_ITEM:
            return state.map(item => 
                (item.name === action.name) 
                ? Object.assign({}, item, {
                    purchased: !item.purchased})
                : item
            )
        default :
            return state
    }
}



// {
//     purchased: true, 
//     name: 'JASON', 
//     price: 'too expensive'
// }