def is_fibonacci_sequence(sequence):
    """
    与えられた数列がフィボナッチ数列かどうかを判定する関数
    
    Args:
        sequence (list): 判定する数列
        
    Returns:
        bool: フィボナッチ数列の場合はTrue、そうでない場合はFalse
    """
    # 数列が2つ未満の場合はFalse
    if len(sequence) < 2:
        return False
    
    # 最初の2つの数が0と1でない場合はFalse
    if sequence[0] != 0 or sequence[1] != 1:
        return False
    
    # 3番目以降の数が前の2つの数の和になっているかチェック
    for i in range(2, len(sequence)):
        if sequence[i] != sequence[i-1] + sequence[i-2]:
            return False
    
    return True

# テストケース
if __name__ == "__main__":
    # フィボナッチ数列のテスト
    test1 = [0, 1, 1, 2, 3, 5, 8, 13, 21]
    print(f"Test 1: {is_fibonacci_sequence(test1)}")  # True
    
    # フィボナッチ数列でないテスト
    test2 = [0, 1, 2, 3, 4, 5]
    print(f"Test 2: {is_fibonacci_sequence(test2)}")  # False
    
    # 短すぎる数列のテスト
    test3 = [0]
    print(f"Test 3: {is_fibonacci_sequence(test3)}")  # False 