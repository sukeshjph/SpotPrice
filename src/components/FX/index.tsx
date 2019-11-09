import React from 'react';
import { RootState } from 'typesafe-actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FXActions from './FXActions';
import DisplayFx from './DisplayFX';
import { FXProps } from './FXTypes';

const FXRates: React.FC<{}> = props => <DisplayFx {...(props as FXProps)} />;

export default connect(
  (state: RootState) => ({
    model: state.RATES,
  }),
  dispatch => ({ actions: bindActionCreators(FXActions, dispatch) }),
)(FXRates);
