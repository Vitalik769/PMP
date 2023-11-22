import React from 'react'
import Cryptos from './Components/ShoppingCart'
import rootReducer from './reducers/store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store} >
                <Cryptos />
            </Provider>
        )
    }
}