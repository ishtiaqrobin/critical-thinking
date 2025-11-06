// const obj = {
//     nextLevel: {
//         courseId: "Level 2",
//     },
//     "Programming Hero": {
//         courseId: "Level 1",
//     },
//     true: {
//         courseId: "PH-001",
//     }
// }

// console.log(obj);

// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const obj = {};

// obj.nextLevel = { courseId: "level 2" };
// obj["Programming Hero"] = { courseId: "level 1" };
// obj[true] = { courseId: "PH-001" };

// obj[course2] = { courseId: "course-002" };
// obj[course1] = { courseId: "course-001" };

// console.log(obj['[object Object]']);


// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const map = new Map();

// map.set(course1, { courseId: "course-001" });
// map.set(course2, { courseId: "course-002" });
// map.set(true, { courseId: "PH-001" });
// map.set("Next Level Web Development", { courseId: "level 2" });

// map.clear();
// map.delete(course2);
// map.get(course1);

// map.forEach((value, key) => console.log("Key", key, "Value", value));
// map.forEach((value, key) => (key.name = "Modified Name " + key.name));

// console.log([...map.values()]);

// for (let key of map.keys()) {
//     (key.name = "Modified Name " + key.name);
// }


const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level" };

const course = [
    [course1, "Level 1"],
    [course2, "Level 2"],
]

const map = new Map(course);

console.log(map);