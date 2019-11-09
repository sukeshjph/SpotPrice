import { createAction } from "typesafe-actions";
import { fxActionTypes } from "./FXConstants";
import { ErrorType } from "./FXTypes";

export const fetchCurrencyRatesByBase = createAction(
  fxActionTypes.FETCH_RATES_BY_BASE,
  action => (base: string) => action({ base })
);

export const fetchCurrencyRatesByBaseComplete = createAction(
  fxActionTypes.FETCH_RATES_BY_BASE_COMPLETE,
  action => (rates: Record<string, number>) => action(rates)
);

export const fetchCurrencyRatesByBaseError = createAction(
  fxActionTypes.FETCH_RATES_BY_BASE_ERROR,
  action => (error: ErrorType) => action(error)
);
