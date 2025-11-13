//* Simulate code with console.log()

const insertionSort = (arr) => {
    console.log("🧩 Initial Array:", arr);

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        console.log(`\n==============================`);
        console.log(`👉 Step ${i}: (index ${i}): Value ${current} `);
        console.log("Current array state:", arr);

        // তুলনা শুরু — current এর সাথে arr[j] compare করা হচ্ছে
        while (j >= 0 && arr[j] > current) {
            console.log(
                `🔸 Compare: arr[${j}] = ${arr[j]} > current (${current}) → shift right`
            );

            // ডানে সরানো হচ্ছে
            arr[j + 1] = arr[j];
            console.log(
                `   🔁 arr[${j + 1}] = ${arr[j]} (shifted), now array:`,
                arr
            );

            j--;
        }

        // এখন current element টাকে তার সঠিক জায়গায় বসানো হচ্ছে
        arr[j + 1] = current;

        console.log(
            `✅ Place current (${current}) at arr[${j + 1}] — final state of this step:`,
            arr
        );
    }

    console.log("\n🎯 Final Sorted Array:", arr);
    return arr;
};

console.log(insertionSort([5, 3, 8, 4, 2]));

