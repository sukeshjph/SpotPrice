import { combineEpics } from 'redux-observable';
import fxEpics from '../components/FX/FXEpic';

export default combineEpics(fxEpics);
