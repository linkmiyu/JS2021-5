// //
// let foo = [10, 20, 30, 40, 50];

// for (let i in foo) {
//     console.log(`${i}번째 요소는 ${foo[i]}이다.`)
// }
// // bar = foo [0]; 10

// for (let item of foo) {
//     console.log(item)
// }
// //예제 1
// let output = "";

// for (let i = 0; i < 10; i++) {
//     for  (let j = 0; j < i+1; j++) {
//         output += "*";
//     }
//     output += "\n";
// }
// console.log(output);

// //예제 2
// for (let i = 0; i < 10; i++) {
//     for  (let j = 0; j < 10 - i; j++) {
//         output += " ";
//     }
//     for  (let j = 0; j < i+1; j++) {
//         output += "*";
//     }
//     output += "\n";
// }
// console.log(output);

// //예제 3
// for (let i = 0; i < 10; i++) {
//     for  (let j = 0; j < 10 - i; j++) {
//         output += " ";
//     }
//     for  (let j = 0; j < i+1; j++) {
//         output += "*";
//     }
//     for  (let j = 0; j < i; j++) {
//         output += "*";
//     }
//     output += "\n";
// }
// console.log(output);

// //예제 4

// for (let i = 0; i < 10; i++) {
//     for  (let j = 0; j < 10 - i; j++) {
//         output += " ";
//     }
//     for  (let j = 0; j < i+1; j++) {
//         output += "*";
//     }
//     for  (let j = 0; j < i; j++) {
//         output += "*";
//     }
//     output += "\n";
// }

i= 0;
let foo = [2, 4, 5, 3, 10];

while (true) {
    if (foo[i] % 2 == 0) {
        bar  = foo[i];
        break;
    }
    i++;
}
console.log(`처음 발견한 짝수 ${bar}`);


bar = [0];
console.log("\n push");
foo.push("자료구조", 1, 0.5);
bar.push(1, 2, 3);
console.log(foo);

console.log("\n pop ");
foo.pop();
console.log(foo);

console.log("\n shift ");
foo.shift();
bar.shift();
console.log(foo);
console.log(bar);

console.log(foo);
console.log(foo.slice(1, 5) );

foo = ["a", "b", "c", "d","e"];
bar = foo.splice(2, 2, 100, 0.5, "문자");
console.log(foo);
console.log(bar);

foo = [0, 1, 2, 3, 4, 5];
foo = foo.join(",");
console.log(foo);

