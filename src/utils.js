const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatCurrency(value) {
  return currencyFormatter.format(value);
}

export const mortgageTypes = ["Repayment", "Interest Only"];
