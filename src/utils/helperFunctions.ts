export const formatAED = (price: number | undefined | null): string => {
  if (!price || isNaN(price)) return "0";
  return price.toLocaleString("en-AE", {
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
};