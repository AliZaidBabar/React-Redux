// Action Types
export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';

// Action Creators
export const depositMoney = (amount) => ({
  type: DEPOSIT,
  payload: amount,
});

export const withdrawMoney = (amount) => ({
  type: WITHDRAW,
  payload: amount,
});
