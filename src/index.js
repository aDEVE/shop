import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './App'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

const pReducer = persistReducer(persistConfig, reducer)

const store = createStore(pReducer, applyMiddleware(...middleware))
const persistor = persistStore(store)

store.dispatch(getAllProducts())

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div> coucou</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root'),
)
