# 유진현 [201840220]


## [04/06]
  > for in 문 예시
    let foo = [10, 20, 30, 40, 50];
    for (let i in foo) {
    console.log(`${i}번째 요소는 ${foo[i]}이다.`)
    }

    for of 문 예시
    let foo = [10, 20, 30, 40, 50];
    for (let item of foo) {
    console.log(item)
   }
  
  > break 키워드
   반복문중 break를 만나면 반복문에서 벗어남
  
  > 배열 선언관련
     =선언 및 초기화=
      - let foo = new Array();
      - let bar = [];
  
     =선언과 동시에 초기화=
      - let foo = new Array(ex, ex2, ex3);
      - let bar = [ex, ex2, ex3];
    
    =배열의 길이=
     - console.log(foo.length); 

    push는 배열의 끝에 원하는 값을 추가하는 함수
    pop는 배열의 마지막 주소에 있는 값을 삭제하는 함수
    shift는 첫번째 주소에 있는 값을 제거하는 함수
    concat은 두개의 배열을 합치는 함수
    reverse는 배열을 역순을 배치
    sort는 아스키값 순 으로 배열 정렬
    slice는 지정한 인덱스 값을 복사 ex) (1,5) 면 1~4
    splice는 지정한 인덱스 값을 잘라냄 ex) (1,3) 1~3
    join은 배열값 사이에 원하는 문자 삽입하여 반환


  > continue 키워드
    반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행
  
  > 스코프
![image](https://user-images.githubusercontent.com/79895978/113675718-9de3b800-96f6-11eb-8018-edd24545d263.png)
  > var 키워드
![image](https://user-images.githubusercontent.com/79895978/113676313-4134cd00-96f7-11eb-92d9-22c2fa282d0e.png)

    
## [03/30]

 > 중첩 조건문
    기본형, if else if 조건문

 > switch 조건문
     <!-- 기본형 -->
     
![image](https://user-images.githubusercontent.com/79895978/112954688-99108880-9179-11eb-9cc6-7b1f3f8f9c56.png)


 > 삼항 연산자
    기본형태 - <불 표현식> ? <참> : <거짓>
     ex) console.log(number % 2 == 0? "짝수":"홀수"); 

 > 배열
    여러 자료를 한번에 다루는 자료형 (여러 자료형을 다 사용 가능)
    요소 - 배열 안에 들어가 있는 자료
    ex) let name = [자료1, 자료2, 자료3]

 > 반복문
  >> while (반복의 형태, 횟수를 알수 없는 경우)
    기본형 - while (bool 표현식) { 문장;}

  >> for
    기본형 - for (let i =0; i<10; i++) {문장;}

    역 for 문 - for (let i = length - 1: i >=0; i--;) {문장;}
![image](https://user-images.githubusercontent.com/79895978/112951756-ab3cf780-9176-11eb-8a06-a245b2a41c6a.png)
    
    for in, for of 문 - for (let 인덱스 in 배열) {문장;}, for (let item of 배열) {문장;}
![image](https://user-images.githubusercontent.com/79895978/112952514-8a28d680-9177-11eb-9384-6caeacc31807.png)




  
      
    


## [03/23]

 >  let 을 통해 변수 선언 가능
 >  여러 연산자가 있음 (비교,가감,참,일치,...)
   ex) typeof 변수의 자료형을 추출 //문자열,숫자,불,함수,객체
## [03/16]

> 자바 스크립트로는 웹/모바일/PC APP, 웹 서버 등을 개발 가능 <br>
> 터미널에서 >node 파일.js를 통해 node를 이용해 바로 열기 가능  </br>
> node 명령어를 통해 간단한 커밋은 바로 해볼수있음
> 무거운 스크립트에 경우 바디에 넣어서 사용

... 케밥 로케이션
 <->
 <->   햄버거          개발자간의 약속
 <->


