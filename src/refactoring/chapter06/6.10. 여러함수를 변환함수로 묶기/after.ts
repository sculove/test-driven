import {TData} from "./before";
/*
[6.10 여러함수를 변환 함수로 묶기]

배경
 - 원본 데이터를 받아서 조작하는 경우가 많음. 이때 정보가 사용되는 곳마다 같은 도출 로직이 반복됨.
 - 모아두면 검색과 갱신을 일관된 장소에서 처리할수 있고 로직 중복도 막을 수 있다.

절차
- 변환할 데이터를 받아서 반환하는 변환함수를 만듦
- 묵을 함수중 하나 골라서 본문 코드를 변환함수로 바꾸고 처리결과를 데이터에 새 필드로 기록. 
- 클라이언트가 이 변환함수를 사용하도록 수정
- 이를 반복
*/

function acquireReading():TData {
  return {
    year: 2021,
    month: 7,
    customer: "werren",
    quantity: 10
  }
}

function baseRate(month: number, year: number) {
  let result = 0;
  if(year > 2000) {
    result += 10;
  } else {
    result += 20;
  }
  if(month > 5) {
    result += 1;
  } else {
    result += 2;
  }
  return result;
}

function taxThreshold(year: number) {
  if(year > 2000) {
    return 10;
  } else {
    return 20;
  }
}

function calculateBaseCharge(reading: TData) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}

// Client
const rawReading = acquireReading();
const reading = enrichReading(rawReading);
const texableCharge = reading.taxableCharge;

// enrich -> 원본 데이터에 필드를 추가하는 경우 사용하는 접두어. (이때 꼭! 원본데이터가 회손되었는지 테스트 한다)
// transform -> 원본 데이터 내용 자체를 바꾸는 접두어
function enrichReading(original:TData) {
  const result:any = { ...original };
  result.baseCharge = calculateBaseCharge(original);
  result.taxableCharge = Math.max(0, reading.baseCharge - taxThreshold(reading.year));
  return result;
}