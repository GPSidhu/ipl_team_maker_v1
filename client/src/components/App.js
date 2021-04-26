import Main from './Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../redux/actions';

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ACTIONS, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
