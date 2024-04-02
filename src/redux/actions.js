export const setValueAction = (value) => ({
    type: 'SET_VALUE',
    payload: value
  });
  
  export const setYearlyBillingAction = (yearlyBilling) => ({
    type: 'SET_YEARLY_BILLING',
    payload: yearlyBilling
  });

  export const toggleTheme = () => ({
    type: 'TOGGLE_THEME'
  });