import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import DisplayFX from './DisplayFX';

const initialProps = {
  actions: {
    fetchCurrencyRatesByBase: () => undefined,
  },
  model: {
    rates: {
      GBP: 0.7808410368,
      EUR: 0.9062896502,
      USD: 1,
    },
    isFetchingRates: false,
    errorFetchingRates: '',
  },
};

let wrapper = shallow(<DisplayFX {...initialProps} />);

describe('Fx Unit tests', () => {
  describe('Renders', () => {
    it('renders without crashing', () => {
      expect(wrapper).toBeDefined();
    });
  });

  describe('loading', () => {
    it('displays loading message', () => {
      const newProps = {
        ...initialProps,
        model: {
          ...initialProps.model,
          isFetchingRates: true,
        },
      };
      wrapper.setProps(newProps);
      expect(wrapper.find('.loading-panel')).toHaveLength(1);
    });
  });

  describe('error', () => {
    it('displays error message', () => {
      const newProps = {
        ...initialProps,
        model: {
          ...initialProps.model,
          errorFetchingRates: 'some random error',
        },
      };
      wrapper.setProps(newProps);
      expect(wrapper.find('.error-panel')).toHaveLength(1);
    });
  });

  describe('Renders correct values', () => {
    it('should have correct currency pairs', () => {
      const newProps = { ...initialProps };
      const newWrapper = shallow(<DisplayFX {...newProps} />);
      expect(
        newWrapper
          .find('.cBox')
          .childAt(0)
          .childAt(1)
          .text(),
      ).toBe('0.7808410368');
    });

    it('should show new values when changed', () => {
      const newProps = {
        ...initialProps,
        model: {
          ...initialProps.model,
          rates: {
            ...initialProps.model.rates,
            GBP: 0.9,
          },
        },
      };
      const newWrapper = shallow(<DisplayFX {...newProps} />);
      expect(
        newWrapper
          .find('.cBox')
          .childAt(0)
          .childAt(1)
          .text(),
      ).toBe('0.9');
    });
  });

  describe('Refresh', () => {
    it('Gets updated fx rates', () => {
      const fetchCurrencyRatesByBase = jest.fn();
      const newProps = {
        ...initialProps,
        actions: {
          ...initialProps.actions,
          fetchCurrencyRatesByBase,
        },
      };
      wrapper.setProps(newProps);
      wrapper.find('.refresh-btn').simulate('click');
      expect(fetchCurrencyRatesByBase).toHaveBeenCalled();
    });
  });
});
