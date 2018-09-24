//Set text filter
export const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text,
  };
};

//Sort by date
export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE',
  };
};

//Sort by amount
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT',
  };
};

//Set start date
export const setStartDate = startDate => {
  return {
    type: 'SET_START_DATE',
    startDate,
  };
};

//Set end date
export const setEndDate = endDate => {
  return {
    type: 'SET_END_DATE',
    endDate,
  };
};
