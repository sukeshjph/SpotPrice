import reducer from './FXReducer';
import { fxActionTypes } from './FXConstants';
import mockJson from './Rates';

const initialState = {
  rates: {},
  isFetchingRates: false,
  errorFetchingRates: '',
};

describe('FX reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe('Fetch Currency rate by base', () => {
    it('sets loading flags to true', () => {
      const action = {
        type: fxActionTypes.FETCH_RATES_BY_BASE,
        payload: { base: 'USD' },
      };
      const outcome = reducer(initialState, action);
      expect(outcome.isFetchingRates).toBeTruthy();
    });
  });

  describe('Fetch Currency rate by base complete', () => {
    const { rates } = mockJson;
    const action = {
      type: fxActionTypes.FETCH_RATES_BY_BASE_COMPLETE,
      payload: rates,
    };
    const state = {
      isFetchingRates: true,
      rates: {},
      errorFetchingRates: '',
    };
    let outcome;
    beforeEach(() => {
      outcome = reducer(state, action);
    });
    it('sets loading flags to false', () => {
      expect(outcome.isFetchingRates).toEqual(false);
    });
    it('sets rates', () => {
      expect(outcome.rates).toEqual(rates);
    });
  });

  describe('Fetch Currency error', () => {
    const action = {
      type: fxActionTypes.FETCH_RATES_BY_BASE_ERROR,
      payload: { error: 'some bad error' },
    };
    const state = {
      isFetchingRates: true,
      rates: {},
      errorFetchingRates: '',
    };
    it('sets loading flags to false', () => {
      const outcome = reducer(state, action);
      expect(outcome.isFetchingRates).toEqual(false);
    });
    it('returns the error', () => {
      const outcome = reducer(state, action);
      expect(outcome.errorFetchingRates).toEqual('some bad error');
    });
  });
});
