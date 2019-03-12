import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

class Timer extends Component {

    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        // console.log(`The current props are: ${currentProps.isPlaying} and the new props are: ${nextProps.isPlaying}`)
        if(!currentProps.isPlaying && nextProps.isPlaying) {
            // start the interval
            const timerInterval = setInterval(() => {
                currentProps.addSecond()
            }, 1000);
            this.setState({
                timerInterval
            });
        } else if(currentProps.isPlaying && !nextProps.isPlaying) {
            // stop the interval
            clearInterval(this.state.timerInterval);
        }
    }

    render(){
        console.log(this.props);
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            restartTimer,
            addSecond
        } = this.props;

        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>
                        {formatTime(timerDuration - elapsedTime)}
                    </Text>
                </View>
                <View style={styles.lower}>
                    { /* Play 버튼은 playing중이 아닐때만 보이도록 한다. */
                    !isPlaying ? <Button iconName="play-circle" onPress={startTimer}/> : null }
                    { /* Stop 버튼은 playing중 일때만 보이도록 한다. */
                    isPlaying ? <Button iconName="stop-circle" onPress={restartTimer}/> : null }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "skyblue"
    },
    upper: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 144,
        fontWeight: "100"
    }
})
export default Timer;