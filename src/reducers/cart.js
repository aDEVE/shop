import { filter, omit } from 'lodash'
import { ADD_TO_CART, CLEAR_CART, DELETE_TO_CART } from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, action.productId]
    case DELETE_TO_CART :
      return filter(state, s => s !== action.productId)
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state, [productId]: (state[productId] || 0) + 1 }
    case DELETE_TO_CART :
      return omit(state, action.productId)
    default:
      return state
  }
}

export const getQuantity = (state, productId) => state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  if (action.type === CLEAR_CART) {
    return initialState
  }
  return {
    addedIds: addedIds(state.addedIds, action),
    quantityById: quantityById(state.quantityById, action),
  }
}

export default cart
