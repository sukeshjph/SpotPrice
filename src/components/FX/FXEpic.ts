import { of } from 'rxjs';
import { mergeMap, catchError, map, filter } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import * as FXActions from './FXActions';
import { getData } from '../../helpers/http';
import { FXActionsType } from './FXTypes';
import { API_URL } from './FXConstants';

const fetchCurrencyRatesByBase: Epic<FXActionsType> = action$ =>
  action$.pipe(
    filter(isActionOf(FXActions.fetchCurrencyRatesByBase)),
    mergeMap(action => {
      const { base } = action.payload;
      return getData(`${API_URL}?base=${base}`).pipe(
        map(({ rates }: any) => FXActions.fetchCurrencyRatesByBaseComplete(rates)),
        catchError(error => of(FXActions.fetchCurrencyRatesByBaseError({ error }))),
      );
    }),
  );

export default fetchCurrencyRatesByBase;
