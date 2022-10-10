import BigNumber from 'bignumber.js';

BigNumber.config({
  EXPONENTIAL_AT: 100,
});

export const convertEToNumber = (value: any, number: any = 18) => {
  return new BigNumber(value).toNumber() / new BigNumber(10).pow(number).toNumber();
};

export const checkEnoughBalance = (price: any, quantity: number, balance: any) => {
  return new BigNumber(balance).isGreaterThanOrEqualTo(new BigNumber(price).multipliedBy(quantity));
};
