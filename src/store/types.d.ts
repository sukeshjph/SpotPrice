import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type RootState = StateType<typeof import('../reducers').default>;
  // Using Typescript declaration merging
  interface Types {
    RootState: RootState;
  }
}
