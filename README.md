<!-- This line was added in the feature/add-comment branch for PR demo -->
# Fibonacci Sequence Checker

このプロジェクトは、与えられた数列がフィボナッチ数列かどうかを判定する関数を提供します。
PythonとJavaScriptの両方のバージョンが実装されています。

## 機能

- 数列がフィボナッチ数列かどうかを判定
- 最初の2つの数が0と1であることを確認
- 3番目以降の数が前の2つの数の和になっていることを確認

## 使用方法

### Python

```python
from fibonacci_checker import is_fibonacci_sequence

sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21]
result = is_fibonacci_sequence(sequence)
print(result)  # True
```

### JavaScript

```javascript
const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const result = isFibonacciSequence(sequence);
console.log(result); // true
```

## テスト

各言語のファイルにはテストケースが含まれています。

### Python
```bash
python fibonacci_checker.py
```

### JavaScript
```bash
node fibonacci_checker.js
``` 