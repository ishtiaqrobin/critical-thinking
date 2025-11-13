// insertionSort([5, 3, 8, 4, 2]);

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = current;
    }

    return arr
}

console.log(insertionSort([5, 3, 8, 4, 2]));

//* 🧩 Summary

//* Time Complexity:
//! Worst case → O(n²)
//? Best case (already sorted) → O(n)
// Space Complexity: O(1)
// In-place algorithm: Yes
// Stable: Yes

//* You want to show Simulate code with console.log() go to (insertionSort.js) file