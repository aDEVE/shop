import axios from 'axios'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products,
})

export const getAllProducts = () => dispatch => {
  axios.get('http://localhost:3000/products').then(({ data }) => {
    dispatch(receiveProducts(data))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId,
})

export const clearCart = () => ({
  type: types.CLEAR_CART,
})

export const deleteItemCart = productId => ({
  type: types.DELETE_TO_CART,
  productId,
})

export const addToCart = productId => dispatch => {
  console.log(productId)
  dispatch(addToCartUnsafe(productId))
}
