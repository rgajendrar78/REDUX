import { buy_book, sell_book } from "./BookTypes";

export const purchase_book = () => {
  return {
    type: buy_book,
  };
};

export const sells_book = () => {
  return {
    type: sell_book,
  };
};
