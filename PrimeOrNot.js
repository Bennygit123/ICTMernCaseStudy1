function isFirstElementPrime(arr) {
    // Check if the array is not empty
    if (arr.length === 0) {
        console.log("Array is empty.");
        return false;
    }

    // Get the first element of the array
    const firstElement = arr[0];

    // Check if the first element is a prime number
    if (isPrime(firstElement)) {
        console.log(`${firstElement} is a prime number.`);
        return true;
    } else {
        console.log(`${firstElement} is not a prime number.`);
        return false;
    }
}

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage
const myArray = [7, 12, 5, 8];
isFirstElementPrime(myArray);
