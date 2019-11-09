import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FXActions from './FXActions';
import DisplayFx from './DisplayFX';
import { FXProps } from './FXTypes';

const FXRates: React.FC<{}> = React.memo(props => <DisplayFx {...(props as FXProps)} />);

export default connect(
  (state: any) => ({
    model: state.RATES,
  }),
  dispatch => ({ actions: bindActionCreators(FXActions, dispatch) }),
)(FXRates);
