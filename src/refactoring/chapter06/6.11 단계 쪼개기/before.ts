export type TProduct = {
  basePrice : number;
  discountThreshold: number;
  discountRate: number;
};

export type TShippingMethod = {
  discountThreshold: number;
  feePerCase: number;
  discountedFee: number;
};

function priceOrder(product: TProduct, quantity: number, shippingMethod: TShippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}