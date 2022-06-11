export default function getDollarAmount(amount) {
  let dollars = amount / 100;
  dollars = dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return dollars;
}
