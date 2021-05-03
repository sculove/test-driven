import {TData} from "./before";

/*
[6.9 여러 함수를 클래스로 묶기]

배경
 - 공통 데이터를 중심으로 긴밀하게 엮어 작동하는 함수무리를 발견하면 클래스 하나로 묶는다.
절차
- 함수들이 공유하는 공통 데이터를 캡슐화하여 클래스를 만든다.
- 공통 레코드를 사용하는 함수 각각을 새 클래스로 옮긴다.
- 데이터를 조작하는 로직들은 함수로 추출해서 새 클래스로 옮긴다

클래스의 장점
- 1) 함수들이 공유하는 공통 환경을 더 명확하게 표현
- 2) 각 함수에 전달되는 인수를 줄여서 객체 안에서의 함수 호출을 간결하게 만듦
- 3) 객체를 시스템의 다른 부분에 전달하기 쉽다.

즉, 클라이언트가 객체의 핵심 데이터를 변경할 수 있고, 파생 객체들을 일관되게 관리 할수 있다.
*/
class Reading {
  private _customer: string;
  private _year: number;
  private _month: number;
  private _quantity: number;

  constructor(data: TData) {
    this._customer = data.customer;
    this._year = data.year;
    this._month = data.month;
    this._quantity = data.quantity;
  }
  public get customer(): string {
    return this._customer;
  }
  public get year(): number {
    return this._year;
  }
  public get month(): number {
    return this._month;
  }
  public get quantity(): number {
    return this._quantity;
  }  
  calculateBaseCharge() {
    return this.baseRate() * this.quantity;
  }
  baseRate() {
    let result = 0;
    if(this.year > 2000) {
      result += 10;
    } else {
      result += 20;
    }
    if(this.month > 5) {
      result += 1;
    } else {
      result += 2;
    }
    return result;
  }
  taxThreshold() {
    if(this.year > 2000) {
      return 10;
    } else {
      return 20;
    }
  }
  taxableCharge() {
    return Math.max(0, this.baseRate() - this.taxThreshold());
  }
}

function acquireReading() {
  return {
    year: 2021,
    month: 7,
    customer: "werren",
    quantity: 10
  }
}

Client
const rawReading = acquireReading();
const reading = new Reading(rawReading);
const texableCharge = reading.taxableCharge();
