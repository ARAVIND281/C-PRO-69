import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner'
export default class TransactionScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermission: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }
    getCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
            scanned: false,
            buttonState: 'clicked'
        });
    };
    handleBarCodeScanned = async ({ type, data }) => {
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        });

    };
    render() {
        const hasCameraPermission = this.state.hasCameraPermission;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        if (buttonState === 'clicked' && hasCameraPermission) {
            return (
                <BarCodeScanner onBarCodeScanned={scanned
                    ? undefined
                    : this.handleBarCodeScanned} />
            );
        }
        else if (buttonState === 'normal') {


            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text>{hasCameraPermission === true ? this.state.scannedData
                        : "request camera Permission"}</Text>
                    <TouchableOpacity onPress={this.getCameraPermission}>
                        <Text>Scan QR code</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
} 