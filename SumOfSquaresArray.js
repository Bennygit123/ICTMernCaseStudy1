function sumOfSquares(arr) {
    // Check if the array is not empty
    if (arr.length === 0) {
        console.log("Array is empty.");
        return 0;
    }

    // Calculate the sum of squares
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue ** 2;
    }, 0);

    // Output the result
    console.log(`The sum of squares is: ${sum}`);
    return sum;
}

// Example usage
const myArray = [2, 3, 4, 5];
sumOfSquares(myArray);
