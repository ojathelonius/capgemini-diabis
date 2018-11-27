import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import bloodSugar from '../../data/bloodSugar';
import carbs from '../../data/carbs';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Button, Input, Item, Label, Picker, Icon } from 'native-base';
import Modal from 'react-native-modalbox';

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
            zIndex: 1
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
            marginBottom: 30,
            zIndex: 1
        }

        const modalMeasureStyle = {
            height: 200,
            backgroundColor: 'white',
            zIndex: 2,
            borderBottomWidth: 1,
            borderBottomColor: '#7E5E41',
            borderTopWidth: 1,
            borderTopColor: '#7E5E41',
            padding: 10
        }

        const modalMealStyle = {
            height: 300,
            backgroundColor: 'white',
            zIndex: 2,
            borderBottomWidth: 1,
            borderBottomColor: '#7E5E41',
            borderTopWidth: 1,
            borderTopColor: '#7E5E41',
            padding: 10
        }

        const modalTitle = {
            fontSize: 20,
            marginBottom: 10
        }

        const modalBtnContainer = {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        }

        const formView = {
            flex: 1
        }

        return (
            <View style={containerStyle}>


                <Modal isOpen={this.props.showMeasureModal} position={"center"} style={modalMeasureStyle} onClosed={() => this.props.closeMeasureModal()}>
                    <Text style={modalTitle}>Add a measure</Text>
                    <View style={formView}>
                        <Item fixedLabel>
                            <Label>Blood sugar</Label>
                            <Input />
                            <Text>mmol/L</Text>
                        </Item>
                    </View>
                    <View style={modalBtnContainer}>
                        <Button style={addBtnStyle} onPress={() => this.props.closeMeasureModal()} >
                            <Text style={btnTextStyle}>Add a measure</Text>
                        </Button>
                    </View>
                </Modal>
                <Modal isOpen={this.props.showMealModal} position={"center"} style={modalMealStyle} onClosed={() => this.props.closeMealModal()}>
                    <Text style={modalTitle}>Add a meal</Text>
                    <View style={formView}>
                        <Item fixedLabel>
                            <Label>Meal name</Label>
                            <Input />
                        </Item>

                        <Item picker fixedLabel>
                            <Label>Meal type</Label>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined }}
                                placeholder="Select meal type"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                            >
                                <Picker.Item label="Breakfast" value="breakfast" />
                                <Picker.Item label="Lunch" value="lunch" />
                                <Picker.Item label="Dinner" value="dinner" />
                            </Picker>
                        </Item>

                        <Item fixedLabel>
                            <Label>Calories</Label>
                            <Input />
                            <Text>kcal</Text>
                        </Item>
                    </View>
                    <View style={modalBtnContainer}>
                        <Button style={addBtnStyle} onPress={() => this.props.closeMealModal()}>
                            <Text style={btnTextStyle}>Add a meal</Text>
                        </Button>
                    </View>
                </Modal>
                <Text style={titleStyle}>Blood sugar - mmol/L)</Text>
                <LineChart
                    data={bloodSugar}
                    width={Dimensions.get('window').width}
                    height={200}
                    chartConfig={bezierChartConfig}
                    bezier
                />
                <View style={centeredView}>
                    <Button style={addBtnStyle} onPress={() => this.props.toggleMeasureModal()}>
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
                    <Button style={addBtnStyle} onPress={() => this.props.toggleMealModal()}>
                        <Text style={btnTextStyle}>Add a meal</Text>
                    </Button>
                </View>
            </View >
        );
    }
}

export default Check;