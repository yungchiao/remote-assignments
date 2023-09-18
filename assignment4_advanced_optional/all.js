function twoSum(numbers, target) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                result.push(i, j);
                return result;
            }
        }
    }

    return result; 
}

console.log(twoSum([2, 7, 11, 15], 9)); 