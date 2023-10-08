function mergeSort(arr) {
    // Base case: If the array has 0 or 1 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle of the array
    const middle = Math.floor(arr.length / 2);

    // Split the array into two halves
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // Recursively merge sort both halves
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(leftSorted, rightSorted);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller element into the result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Push any remaining elements from both arrays
    return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [8, 3, 5, 2, 4, 7, 1, 6];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
