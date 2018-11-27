import { connect } from 'react-redux';
import Check from '../components/Check';
import { toggleMealModal, toggleMeasureModal, closeMealModal, closeMeasureModal } from '../actions/appActions';

const mapStateToProps = (state, ownProps) => ({
    showMeasureModal: state.appReducer.showMeasureModal,
    showMealModal: state.appReducer.showMealModal
});

const mapDispatchToProps = (dispatch) => ({
    toggleMeasureModal: () => dispatch(toggleMeasureModal()),
    toggleMealModal: () => dispatch(toggleMealModal()),
    closeMeasureModal: () => dispatch(closeMeasureModal()),
    closeMealModal: () => dispatch(closeMealModal())
});

const CheckContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Check);

export default CheckContainer;