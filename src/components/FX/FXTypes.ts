import { ActionType } from 'typesafe-actions';
import * as FXActions from './FXActions';

// Action Types

export type FXActionsType = ActionType<typeof FXActions>;
export type ErrorType = {
  error: string;
};

export interface IRatesType {
  rates: Record<string, number>;
}

// Reducers

export interface FXState {
  rates: Record<string, number>;
  isFetchingRates: boolean;
  errorFetchingRates: string;
}

// Component
export interface FXProps {
  model: FXState;
  actions: {
    fetchCurrencyRatesByBase: (base: string) => void;
  };
  children?: React.ReactNode;
}
