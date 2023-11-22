import React from 'react';
import { Text, View, ScrollView, StyleSheet, SafeAreaView, Button, Image,} from 'react-native';
import { addCrypto, removeCrypto } from '../src/actions';
import { connect } from 'react-redux';

const initialState = {
    name: '',
    price: 0,
};

class Cryptos extends React.Component {
    state = initialState;

    updateInput = (key, value) => {
        this.setState({
            ...this.state,
            [key]: value,
        });
    };

    addCrypto = (crypto) => {
        this.props.dispatchAddCrypto(crypto);
    };

    removeCrypto = (crypto) => {
        this.props.dispatchRemoveCrypto(crypto);
    };

    calculateTotal = () => {
        return this.props.cryptos_cart.reduce((sum, crypto) => sum + crypto.price, 0);
    };

    renderCryptosRow = (cryptos) => {
        return (
            <View style={styles.cryptosRow}>
                {cryptos.map((crypto, index) => (
                    <View style={styles.cryptoItem} key={index}>
                        <Image source={{ uri: crypto.img }} style={styles.cryptoImage} />
                        <Text>{crypto.name}</Text>
                        <Text>{crypto.price} $</Text>
                        <Button title='Add to Cart' onPress={() => this.addCrypto(crypto)} />
                    </View>
                ))}
            </View>
        );
    };

    render() {
        const { cryptos, cryptos_cart } = this.props;
        const total = this.calculateTotal();

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="always">
                {cryptos.map((crypto, index) => (
                    <View style={styles.cryptoItem} key={index}>
                        <Image source={{ uri: crypto.img }} style={styles.cryptoImage} />
                        <Text>{crypto.name}</Text>
                        <Text>{crypto.price} $</Text>
                        <Button title='Add to Cart' onPress={() => this.addCrypto(crypto)} />
                    </View>
                ))}
                </ScrollView>
                <View style={styles.separator} />
                <Text style={styles.title}>Cryptos Cart</Text>
                <Text style={styles.total}>Total cost: {total} $</Text>
                <ScrollView keyboardShouldPersistTaps="always">
                    {cryptos_cart.map((crypto, index) => (
                        <View style={styles.cryptoItem} key={index}>
                            <Image source={{ uri: crypto.img }} style={styles.cryptoImage} />
                            <Text>{crypto.name}</Text>
                            <Text>{crypto.price}</Text>
                            <Button title='Remove from Cart' onPress={() => this.removeCrypto(crypto)} />
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 10,
    },
    cryptosRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
    },
    cryptoItem: {
        flex: 1,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 15,
    },
    cryptoImage: {
        width: 100, 
        height: 100, 
        resizeMode: 'contain', 
    },
    separator: {
        height: 2,
        backgroundColor: '#FFD700',
        marginVertical: 20,
    },
    total: {
        fontSize: 22,
        fontWeight: '700',
        marginTop: 10,
    },
});

const mapStateToProps = (state) => ({
    cryptos: state.cryptoReducer.cryptos,
    cryptos_cart: state.cryptoReducer.cryptos_cart,
});

const mapDispatchToProps = {
    dispatchAddCrypto: (crypto) => addCrypto(crypto),
    dispatchRemoveCrypto: (crypto) => removeCrypto(crypto),
};

export default connect(mapStateToProps, mapDispatchToProps)(Cryptos);