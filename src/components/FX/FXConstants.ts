export const fxActionTypes = {
  FETCH_RATES_BY_BASE: "FETCH_RATES_BY_BASE",
  FETCH_RATES_BY_BASE_COMPLETE: "FETCH_RATES_BY_BASE_COMPLETE",
  FETCH_RATES_BY_BASE_ERROR: "FETCH_RATES_BY_BASE_ERROR"
} as const;

export const API_URL = "https://api.exchangeratesapi.io/latest";
