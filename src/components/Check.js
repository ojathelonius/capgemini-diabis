import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import bloodSugar from '../../data/bloodSugar';
import carbs from '../../data/carbs';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Button } from 'native-base';

class Check extends React.Component {

    render() {

        const containerStyle = {
            flex: 1,
            alignItems: 'center',
            paddingTop: 10
        };

        const titleStyle = {
            fontSize: 13,
            fontFamily: 'Luna',
            color: '#7F5F42',
            textAlign: 'center'
        }

        const bezierChartConfig = {
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2,
            color: (opacity = 1) => '#7F5F42',
            style: {
                borderRadius: 16
            }
        };
        const barChartConfig = {
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 0,
            color: (opacity = 1) => '#7F5F42',
            style: {
                borderRadius: 16
            }
        };

        const addBtnStyle = {
            backgroundColor: '#7F5F42',
        }

        const btnTextStyle = {
            color: 'white',
            marginLeft: 15,
            marginRight: 15,
            fontSize: 18
        }

        const centeredView = {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
            marginBottom: 30
        }

        return (
            <View style={containerStyle}>
                <Text style={titleStyle}>Blood sugar - mmol/L)</Text>
                <LineChart
                    data={bloodSugar}
                    width={Dimensions.get('window').width}
                    height={200}
                    chartConfig={bezierChartConfig}
                    bezier
                />
                <View style={centeredView}>
                    <Button style={addBtnStyle}>
                        <Text style={btnTextStyle}>Add a measure</Text>
                    </Button>
                </View>
                <Text style={titleStyle}>Mean kcal per meal</Text>
                <BarChart
                    data={carbs}
                    width={Dimensions.get('window').width}
                    height={200}
                    chartConfig={barChartConfig}
                />
                <View style={centeredView}>
                    <Button style={addBtnStyle}>
                        <Text style={btnTextStyle}>Add a meal</Text>
                    </Button>
                </View>
            </View >
        );
    }
}

export default Check;