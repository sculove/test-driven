/**
 * 반복문 쪼개기
 * 
 * [배경]
 * - 반복문에서 하나 이상의 일을 수행할 때
 * - 이후 함수 추출하기, 반복문을 파이프라인으로 변경하기를 연이어 수행하는 경우가 많다. 
 * - 따라서 이후 작업을 염두에 두고 시작한다.
 */

function acquireData(input) {
  return input.split("\n")
    .slice(1)
    .filter(line => line.trim() !== "")
    .map(line => line.split(","))
    .filter(record => record[1].trim() == "India")
    .map(record => ({
      city: record[0].trim(),
      phone: record[2].trim()
    }))
}