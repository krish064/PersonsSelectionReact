import { combineReducers } from "redux";

import counterReducer from "./counter-reducer";
import personReducer from "./person-reducer";
import PropTypes from "prop-types";

const rootReducer = combineReducers({
  counter: counterReducer,
  personData: personReducer,
});

rootReducer.propTypes = {
  counter: PropTypes.object,
  personData: PropTypes.array,
};

export default rootReducer;
