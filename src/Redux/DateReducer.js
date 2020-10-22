const CHANGE_DATE_PERIOD = "CHANGE_DATE_PERIOD";

let initialState = {
  start: new Date(),
  end: null,
};

const DateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATE_PERIOD:
      return {
        start: action.startDate,
        end: action.endDate,
      };
    default:
      return state;
  }
};

const changeDatePeriod = (startDate, endDate) => ({
  type: CHANGE_DATE_PERIOD,
  startDate,
  endDate,
});
