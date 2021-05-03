export type TData = {
  customer: string;
  year: number;
  month: number;
  quantity: number;
};

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
const reading = acquireReading();
const base = calculateBaseCharge(reading);
const texableCharge = Math.max(0, base - taxThreshold(reading.year));

