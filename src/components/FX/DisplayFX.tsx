import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiRefresh } from '@mdi/js';
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
    paddingBottom: '0.5rem',
  },
  currencyBoxItemLabel: {
    paddingRight: '1rem',
    ontSize: '1.1rem',
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
  }, []);

  const handleRefresh = () => fetchCurrencyRatesByBase('USD');

  return (
    <div className={classes.mainContainer}>
      <IconButton onClick={handleRefresh}>
        <Icon path={mdiRefresh} title="Refresh" size={1} color="red" />
      </IconButton>
      <div className={classes.curContainer}>
        <span className={classes.mainLabel}>1 USD:</span>
        <div className={classes.currencyBox}>
          {currenciesList.map(cur => (
            <div className={classes.currencyBoxItem}>
              <span className={classes.currencyBoxItemLabel}>{cur}</span>
              <span>{rates[cur]}</span>
            </div>
          ))}
          <div className={classes.currencyBoxItem}>{getCurrentTimeStamp()}</div>
        </div>
      </div>
    </div>
  );
});

export default DisplayFX;
