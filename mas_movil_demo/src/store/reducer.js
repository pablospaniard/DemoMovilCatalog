import * as ActionTypes from './actions';
import phones from '../api/phones';

const initialState = phones;
console.log('initialState', initialState)

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PHONES:
            return {
                ...state,
                state: action.payload
            };
        default:
            return state;
    }

}

export default reducer;

