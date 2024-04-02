const initialState = {
    value: 0,
    yearlyBilling: false,
    darkMode: false 
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VALUE':
        return {
          ...state,
          value: action.payload
        };
      case 'SET_YEARLY_BILLING':
        return {
          ...state,
          yearlyBilling: action.payload
        };
      case 'TOGGLE_THEME':
        return {
          ...state,
          darkMode: !state.darkMode
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  