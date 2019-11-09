import { combineReducers } from 'redux';
import fetchRatesReducer, { FXReducerType } from '../components/FX/FXReducer';

export interface AppState {
  RATES: FXReducerType;
}

const rootReducer = combineReducers<AppState>({
  RATES: fetchRatesReducer,
});

export default rootReducer;
