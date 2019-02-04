import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

const cartPersistConfig = {
  key: 'cart',
  storage,
}

export default combineReducers({
  cart: persistReducer(cartPersistConfig, cart),
  products,
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getQuantities = state =>
  getAddedIds(state).reduce((total, id) => total + getQuantity(state, id), 0)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) => total + getProduct(state, id).price * getQuantity(state, id), 0)
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }))
