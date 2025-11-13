// selectionSort([5, 3, 8, 4, 2]);

const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        console.log("Sate of arr: ", array);

        let midIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[midIndex]) {
                midIndex = j;
            }
        }

        if (midIndex !== i) {
            // let temp = array[i];
            // array[i] = array[midIndex];
            // array[midIndex] = temp;

            [array[i], array[midIndex]] = [array[midIndex], array[i]] // swap use ES6 syntax
        }
        console.log(`After pass ${i + 1}`, array);
    }
}

selectionSort([5, 3, 8, 4, 2]);