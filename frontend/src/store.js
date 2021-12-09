import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { 
    orderCreateReducer, 
    orderDeleteReducer, 
    orderDeliverReducer, 
    orderDetailsReducer, 
    orderListReducer, 
    orderMineListReducer, 
    orderPayReducer 
} from './reducers/orderReducers';
// import data from "./data";
import { 
    productListReducer, 
    productDetailsReducer, 
    productCreateReducer,
    productUpdateReducer,
    productDeleteReducer,
    productCategoryListReducer,
    productReviewCreateReducer
} from './reducers/productReducer';
import { 
    userDeleteReducer,
    userDetailsReducer, 
    userListReducer, 
    userRegisterReducer, 
    userSigninReducer, 
    userTopSellerListReducer, 
    userUpdateProfileReducer, 
    userUpdateReducer
} from './reducers/userReducer';

// define initial state
const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo') 
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null
    },
    cart: {
        cartItems: localStorage.getItem('cartItems') 
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        paymentMethod: 'PayPal'
    }
};
// const reducer = (state, action) => {
//     return {products: data.products }
// }

// introduce reducers to the store:
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userTopSellerList: userTopSellerListReducer,
    productCategoryList: productCategoryListReducer,
    productReviewCreate: productReviewCreateReducer
})

// in order to see in redux devtools in chrome we need to add this:
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux-thunk allow you to send ajax requests from redux components
// for applying redux-thunk add compose here:
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;