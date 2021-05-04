import {TProduct, TShippingMethod} from "./before";

/*
[6.11 단계 쪼개기]

배경
 - 다른 단계로 볼 수 있는 코드 영역들이 서로 다른 데이터와 함수를 사용하는 경우 단계쪼개기를 한다.
 - 예) 데이터 처리 -> 입력 부분 처리 + 로직 처리, 컴파일러의 단계

절차
- 두번째 단계에 해당하는 코드에서 함수 추출하기
- 중간단계 데이터 구조를 만들어 추출한 함수의 인자로 넣기 
- 이때 중간단계 데이터를 첫번째 단계에서 생성된 데이터 중심으로 구성하고 두번째 함수에서 중간데이터를 사용하도록 매개변수를 변경
- 첫번째 단계코드를 함수로 추출하면서 중간데이터 구조를 반환하도록 구성
*/

function priceOrder(product: TProduct, quantity: number, shippingMethod: TShippingMethod) {
  const priceData = calculatePricingData(product, quantity);
  return applyShipping(priceData, shippingMethod, quantity);
}

function calculatePricingData(product: TProduct, quantity: number) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
  return { basePrice, discount };
}

function applyShipping(priceData: any, shippingMethod: TShippingMethod, quantity: number) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}
