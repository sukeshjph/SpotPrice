import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiRefresh } from '@mdi/js';
import cn from 'classnames';
import { FXProps } from './FXTypes';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingTop: '10px',
  },
  curContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  mainLabel: {
    flexBasis: '30%',
    textAlign: 'right',
    paddingRight: '2rem',
    fontSize: '1.5rem',
  },
  currencyBox: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '70%',
  },
  currencyBoxItem: {
    textAlign: 'left',
    marginBottom: '2rem',
    minHeight: '40px',
    backgroundColor: '#94b596',
    borderRadius: '5px',
    width: '20rem',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '5px',
  },
  currencyBoxItemLabel: {
    paddingRight: '1rem',
    fontSize: '1.1rem',
  },
}));

const getCurrentTimeStamp = () => {
  var currentdate = new Date();
  return `Last Updated: ${currentdate.getDate()}/${currentdate.getMonth()}/${currentdate.getFullYear()}@${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
};

const DisplayFX: React.FC<FXProps> = React.memo(props => {
  const currenciesList = ['GBP', 'EUR'];
  // @ts-ignore
  const classes = useStyles();
  const {
    model: { rates, isFetchingRates, errorFetchingRates },
    actions: { fetchCurrencyRatesByBase },
  } = props;

  useEffect(() => {
    fetchCurrencyRatesByBase('USD');
  }, []); // Only runs on first render

  const handleRefresh = () => fetchCurrencyRatesByBase('USD');

  return (
    <div className={classes.mainContainer}>
      <IconButton onClick={handleRefresh} className="refresh-btn" style={{ marginBottom: '10px' }}>
        <Icon path={mdiRefresh} title="Refresh" size={1} color="red" />
      </IconButton>
      {isFetchingRates && <div className="loading-panel">Loading...</div>}
      {!isFetchingRates && errorFetchingRates == '' && (
        <div className={classes.curContainer}>
          <span className={classes.mainLabel}>Rates:</span>
          <div className={cn(classes.currencyBox, 'cBox')}>
            {currenciesList.map((cur, index) => (
              <div className={classes.currencyBoxItem} key={`currencyBoxItem${index}`}>
                <span className={classes.currencyBoxItemLabel}>1 USD =</span>
                <span style={{ paddingRight: '1rem' }}>{rates[cur]}</span>
                <span>{cur}</span>
              </div>
            ))}
            <div style={{ textAlign: 'left' }}>{getCurrentTimeStamp()}</div>
          </div>
        </div>
      )}
      {errorFetchingRates !== '' && <span className="error-panel">error:{errorFetchingRates}</span>}
    </div>
  );
});

export default DisplayFX;
