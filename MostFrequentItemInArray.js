function findMostFrequentItem(arr) {
    // Check if the array is not empty
    if (arr.length === 0) {
        console.log("Array is empty.");
        return null;
    }

    // Create an object to store the frequency of each item
    const frequencyMap = {};

    // Iterate through the array to count the frequency of each item
    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    // Find the most frequent item and its frequency
    let mostFrequentItem;
    let highestFrequency = 0;

    for (const item in frequencyMap) {
        if (frequencyMap[item] > highestFrequency) {
            mostFrequentItem = item;
            highestFrequency = frequencyMap[item];
        }
    }

    // Output the result
    console.log(`The most frequent item is "${mostFrequentItem}" with a frequency of ${highestFrequency}.`);
    return mostFrequentItem;
}

// Example usage
const myArray = [2, 3, 2, 5, 6, 3, 2, 7, 2];
findMostFrequentItem(myArray);
