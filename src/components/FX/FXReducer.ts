import { createReducer, StateType } from 'typesafe-actions';
import { FXState, FXActionsType } from './FXTypes';
import * as FXActions from './FXActions';

const initialState = {
  rates: {},
  isFetchingRates: false,
  errorFetchingRates: '',
} as FXState;

const fetchRatesReducer = createReducer<FXState, FXActionsType>(initialState)
  .handleAction(FXActions.fetchCurrencyRatesByBase, state => ({
    ...state,
    isFetchingRates: true,
    errorFetchingRates: '',
  }))
  .handleAction(FXActions.fetchCurrencyRatesByBaseComplete, (state, action) => ({
    ...state,
    isFetchingRates: false,
    rates: action.payload,
    errorFetchingRates: '',
  }))
  .handleAction(FXActions.fetchCurrencyRatesByBaseError, (state, action) => ({
    ...state,
    isFetchingRates: false,
    errorFetchingRates: action.payload.error,
  }));

export type FXReducerType = StateType<typeof fetchRatesReducer>;

export default fetchRatesReducer;
