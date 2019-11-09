import { combineReducers } from 'redux';
import fetchRatesReducer from '../components/FX/FXReducer';

const rootReducer = combineReducers({
  RATES: fetchRatesReducer,
});

export default rootReducer;
