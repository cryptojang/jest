/*
const a = require("./a");
*/

/*
test("두 수를 더합니다.", () => {
    //테스트 내용
    expect(a(1, 2)).toBe(3); //a에 1,2 넣었을 때 3 나오길 기대한다.
  });
*/

const { sum, sumOf } = require("./a"); //cmjs문법

describe("덧셈 함수들", () => {
  it("두 수의 합 구하기", () => {
    expect(sum(2, 4)).toBe(6);
  });

  it("배열의 모든 숫자 더하기", () => {
    const numbers = [1, 2, 3, 4, 5];

    expect(sumOf(numbers)).toBe(15);
  });
});
