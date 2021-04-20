import { PLAYS, TInvoice, TPerformance, TPlay } from "./model";

export function statement(invoice:TInvoice, plays: Record<string, TPlay>) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format;

  for (let perf of invoice.performances) {
    let thisAmount = amountFor(playFor(perf), perf); // Refactoring - VSCODE : module 범위의 function으로 추출
    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역을 출력한다.
    result += ` ${playFor(perf).name}: ${format(thisAmount/100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }
  result += `총액: ${format(totalAmount/100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}

function playFor(perf: TPerformance) {
  return PLAYS[perf.playID];
}

// Refactoring - 명확한 이름으로 바꾸기 (F2)
function amountFor(play: TPlay, performance: TPerformance) {
  let result = 0;

  switch (play.type) {
    case "tragedy": // 비극
      result = 40000;
      if (performance.audience > 30) {
        result += 1000 * (performance.audience - 30);
      }
      break;
    case "comedy": // 희극
      result = 30000;
      if (performance.audience > 20) {
        result += 1000 + 500 * (performance.audience - 20);
      }
      result += 300 * performance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }
  return result;
}
