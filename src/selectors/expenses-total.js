export default expenses => {
  return expenses.map(expense => expense.amount).reduce((sum, val) => {
    return sum + val;
  }, 0);
};
