import { ADD_CRYPTO, REMOVE_CRYPTO } from '../src/actions'

const initialState = {
    cryptos: [
        { name: 'Bitcoin', price: 10000, img: 'https://cdn.27.ua/sc--media--prod/default/56/18/52/5618528f-b2f7-43de-ae7e-dbd26305f926.jpeg' },
        { name: 'Ethereum', price: 4220, img: 'https://www.images-apmex.com/images/products/1-oz-gold-round-ethereum_243442_slab.jpg?v=20211213043426&width=900&height=900' },
        { name: 'Litecoin', price: 4512, img: 'https://qph.cf2.quoracdn.net/main-qimg-6b38de5b5d9320901235aa116d38bfda-pjlq' },
        { name: 'Dash', price: 7912, img: 'https://content.rozetka.com.ua/goods/images/big/12842693.jpg' },
        { name: 'Monero', price: 451, img: 'https://m.media-amazon.com/images/I/817J+7fQF4L.jpg' },
        { name: 'Dogecoin', price: 743, img: 'https://www.images-apmex.com/images/products/1-oz-gold-round-dogecoin-round_233049_obv.jpg?v=20210907081139&width=450&height=450' },
        { name: 'VertCoin', price: 4894, img: 'https://vertcoin.fun/wp-content/uploads/Vertcoin-Coin-3.png' },
    ],
    cryptos_cart: []
}

const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CRYPTO:
            const index1 = state.cryptos.findIndex(
                crypto => crypto.name === action.crypto.name)
            return {
                ...state,
                cryptos_cart: [...state.cryptos_cart, action.crypto],
                cryptos: [
                    ...state.cryptos.slice(0, index1),
                    ...state.cryptos.slice(index1 + 1)
                ]
            }
        case REMOVE_CRYPTO:
            const index = state.cryptos_cart.findIndex(
                crypto => crypto.name === action.crypto.name)
            return {
                ...state,
                cryptos: [...state.cryptos, action.crypto],
                cryptos_cart: [
                    ...state.cryptos_cart.slice(0, index),
                    ...state.cryptos_cart.slice(index + 1)
                ]

            }
        default:
            return state
    }
}

export default cryptoReducer