/**
 * 与えられた数列がフィボナッチ数列かどうかを判定する関数
 * @param {number[]} sequence - 判定する数列
 * @returns {boolean} フィボナッチ数列の場合はtrue、そうでない場合はfalse
 */
function isFibonacciSequence(sequence) {
    // 数列が2つ未満の場合はfalse
    if (sequence.length < 2) {
        return false;
    }

    // 最初の2つの数が0と1でない場合はfalse
    if (sequence[0] !== 0 || sequence[1] !== 1) {
        return false;
    }

    // 3番目以降の数が前の2つの数の和になっているかチェック
    for (let i = 2; i < sequence.length; i++) {
        if (sequence[i] !== sequence[i - 1] + sequence[i - 2]) {
            return false;
        }
    }

    return true;
}

// テストケース
// フィボナッチ数列のテスト
const test1 = [0, 1, 1, 2, 3, 5, 8, 13, 21];
console.log(`Test 1: ${isFibonacciSequence(test1)}`); // true

// フィボナッチ数列でないテスト
const test2 = [0, 1, 2, 3, 4, 5];
console.log(`Test 2: ${isFibonacciSequence(test2)}`); // false

// 短すぎる数列のテスト
const test3 = [0];
console.log(`Test 3: ${isFibonacciSequence(test3)}`); // false 