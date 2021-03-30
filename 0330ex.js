// switch
let input = 31;

switch (input %2 ) {
    case 0:
        console.log ("짝수 입니다.")
        break;
    case 1:
        console.log ("홀수 입니다.")
        break;
}

let date = new Date();

console.log(date.getMonth);

switch ( date.getMonth()+1) {
    case.12:
    case.1:
    case.2:
        console.log("겨울");
        break;
    case.3:
    case.4:
    case.5:
        console.log("봄");
        break;
    case.6:
    case.7:
    case.8:
        console.log("여름");
        break;
    case.9:
    case.10:
    case.11:
        console.log("가을");
        break;
    default:
        console.log("???")
        break;
}
//  삼항 연산자
let number = 31;

console.log(number % 2 == 0? "짝수":"홀수");

//응용 변수 초기화
let test;
 test = test ? test : "초기화"
 console.log(test);

 number = number ? number : "초기화"
 console.log(number);

 test = test && "초기화"
 console.log(test);

 number = number && "초기화"
 console.log(number);


 const repl = require('repl');

 repl.start( {
     prompt: "숫자 입력> ",
     eval: (command, context, filename, callback) => {
         let number = Number(command);
         if (isNaN(number)) {
             console.log("숫자가 아님");
         } else {
             console.log("숫자");
         }
         callback();
    }
 })


 
