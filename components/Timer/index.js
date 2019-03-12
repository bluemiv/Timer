import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as timerAction } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

// action을 reducer로 보내는 역할 -> reducer는 action에 따라 다른 결과를 줌
function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(timerAction.startTimer, dispatch),
        restartTimer: bindActionCreators(timerAction.restartTimer, dispatch),
        addSecond: bindActionCreators(timerAction.addSecond, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);