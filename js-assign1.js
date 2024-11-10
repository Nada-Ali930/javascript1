//Write a program that allow to user enter number then print it
var num1 = Number(window.prompt('enter number'));
window.alert(num1);
// Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
var num2 = Number(window.prompt('enter number'));
if(!isNaN(num2)){
if(num2 % 3==0){
    console.log("yes");
}
else{
    console.log("no");
}
}else{
    console.log("not a number");
}
//Write a program that allows the user to insert 2 integers then print the max
var num3 = Number(window.prompt('enter an integer number'));
var num4 = Number(window.prompt('enter an integer number'));
if(isNaN(num3)||isNaN(num4)){
    console.log("not a number");
    }else{
       if(num3 >= num4)//لو يساوى هيطبع اى رقم فيهم
        console.log(num3); 
       else
        console.log(num4); 
    }
//Write a program that allows the user to insert an integer then print negative if it is
//negative number otherwise print positive.
var num5 = Number(window.prompt('enter an integer number'));
if(isNaN(num5)){
    console.log("not a number");
}else{
    if(num5<0)
        console.log("negative");
    else if(num5>0)
        console.log("positive");
    else
       console.log("not positive not negative");//الصفر ليس موجب وليس سالب 
}
//Write a program that take 3 integers from user then print the max element
//and the min element.
var num6 = Number(window.prompt('enter an integer number 1'));
var num7 = Number(window.prompt('enter an integer number 2'));
var num8 = Number(window.prompt('enter an integer number 3'));
if(num6>=num7 && num6>=num8 ){
    console.log(`max number= ${num6}`);
    if(num7>num8)
        console.log(`min number= ${num8}`);  
    else
        console.log(`min number= ${num7}`);  
}
else if(num7>=num6 && num7>=num8 ){
    console.log(`max number= ${num7}`);
    if(num6>num8)
        console.log(`min number= ${num8}`);  
    else
        console.log(`min number= ${num6}`);  
}
else if(num8>=num6 && num8>=num7 ){
    console.log(`max number= ${num8}`);
    if(num6>num7)
        console.log(`min number= ${num7}`);  
    else
        console.log(`min number= ${num6}`); 
}
else{
   console.log("not a number")//not a number لو احد الارقام 
}  
//Write a program that allows the user to insert integer number then
// check If a number is oven or odd
var num9 = Number(window.prompt('enter an integer number '));
if(isNaN(num9)){
         console.log("not a number");
}else{
    if(num9 % 2==0)
        console.log("even");
    else
        console.log("odd"); 
}
//Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
//then print vowel otherwise print consonant
var character = window.prompt('enter a character');
if(character=='a'||character=='e'||character=='i'||character=='o'||character=='u'||character=='A'||character=='E'||character=='I'||character=='O'||character=='U')//capital and small
    console.log("vowel"); 
else
    console.log("consonant");
//Writeaprogramthat allows user to insert integer then print all numbers between 1 to
//that’s number
var num10 = Number(window.prompt('enter an integer number '));
for(var i=1;i<=num10;i++){
    console.log(i);
}
//Write a program that allows userto insert integerthen print a multiplication table up to 12.
var num12 = Number(window.prompt('enter an integer number '));
for(var i=1;i<=12;i++){
        console.log(i*num12);
}
//Write a program that allows to user to insert number then print all even numbers
//between 1 to this number
var num13 = Number(window.prompt('enter an integer number'));
for(var i=2;i<num13;i++){//iteration كدا كدا الواحد مش هيطبع فانا بقلل [between]
    if (i % 2==0)
       console.log(i);
}
//Write a program that take two integers then print the power
var num14 = Number(window.prompt('enter number'));
var pow = Number(window.prompt('enter power'));
var multi=1;
for(var i=1;i<=pow;i++){
   multi*=num14;
}
console.log(multi);
//Write a program to enter marks of five subjects and calculate total, average and
//percentage.
var num15;
var sum1=0;
for(var i=1 ;i<=5;i++){
     num15 = Number(window.prompt(`enter degree of subgect ${i}`));
     sum1+=num15;
}
console.log(`total = ${sum1}`);
var avg1=sum1/5;
console.log(`average = ${avg1}`);
var perce=sum1/5;//(sum1/500)*100;
console.log(`percentage = ${perce}`);
//13-Write a program to input month number and print number of days in that month.
var num16 = Number(window.prompt("enter month number"));
if(num16==4||num16==6||num16==9||num16==11)
    console.log("Days in Month: 30") 
else if(num16==2)
    console.log("Days in Month: 28  except in leap year 29 day")//سنه كبيسه 29 يوم
else
    console.log("Days in Month: 31")  
//Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F
var arr=['Physics', 'Chemistry', 'Biology', 'Mathematics' , 'Computer']//   مسموح search عارفه اننا لسه مخدناهوش بس ال 
var degree,perce2;
for(i=0;i<5;i++){
    degree = Number(window.prompt(`enter ${arr[i]} degree`));
    if(degree>=90)//باعتبار ان درجة كل مادة من 100
        console.log(`${degree} % : Grad A`);
    else if(degree>=80)
        console.log(`${degree} % : Grad B`);
    else if(degree>=70)
        console.log(`${degree} % : Grad C`);
    else if(degree>=60)
        console.log(`${degree} % : Grad D`);
    else if(degree>=40)
        console.log(`${degree} % : Grad E`);
    else
        console.log(`${degree} % : Grad F`);
}  
               //switch
// Write a program to print total number of days in month
var num17 = Number(window.prompt('enter month number'));
switch(num17){
    case 1:
        console.log('31 day');
        break; 
    case 2:
        console.log('28 day');
        break; 
    case 3:
        console.log('31 day');
        break;
    case 4:
        console.log('30 day');
        break;
    case 5:
        console.log('31 day');
        break;
    case 6:
        console.log('30 day');
        break;
    case 7:
        console.log('31 day');
        break;
    case 8:
        console.log('31 day');
        break;
    case 9:
        console.log('30 day');
        break;
    case 10:
        console.log('31 day');
        break;
    case 11:
        console.log('30 day');
        break;
    case 12:
        console.log('31 day');
        break;
    default:
        console.log('enter number from 1 to 12');
        break;
}
//Write a program to check whether an alphabet is vowel or consonant
var char2 = window.prompt('enter a character');
switch(char2){
    case 'a':
        console.log('vowel');
        break; 
    case 'e':
        console.log('vowel');
        break; 
    case 'i':
        console.log('vowel');
        break;
    case 'o':
        console.log('vowel');
        break;
    case 'u':
        console.log('vowel');
        break;
    case 'A':
        console.log('vowel');
        break;
    case 'E':
        console.log('vowel');
        break;
    case 'I':
        console.log('vowel');
        break;
    case 'O':
        console.log('vowel');
        break;
    case 'U':
        console.log('vowel');
        break;
    default:
        console.log('consonant');
        break;
}
//Write a program to find maximum between two numbers
var a = Number(window.prompt('enter num1'));
var b =Number( window.prompt('enter num2'));
switch(a>=b){
   case true:
      console.log(a);
      break;
   default:
      console.log(b);
      break;
}
//Write a program to check whether a number is even or odd
var c =Number(window.prompt('enter number'));
switch(c%2==0){
   case true:
      console.log("even");
      break;
   default:
      console.log("odd");
      break;
}
//Write a program to check whether a number is positive or negative or zero
var d =Number(window.prompt('enter number'));
if(isNaN(d)){
    console.log("not a number");
}
else{
    switch(d>0){
        case true:
           console.log("positive");
           break;
        default:
           switch(d==0){
             case true:
                console.log("0");
                break;
             case false:
                console.log("negative");
                break;
           }
            break;
     }
}
//Write a program to create Simple Calculator
var e = Number(window.prompt('enter numb1'));
var op = window.prompt('enter operation[+,-,*,/,%,**]');
var f = Number(window.prompt('enter numb2'));
switch(op){
    case '+':
        console.log(e+f);
        break;
    case '-':
        console.log(e-f);
        break; 
    case '*':
        console.log(e*f);
        break; 
    case '/':
        console.log(e/f);
        break; 
    case '%':
        console.log(e%f);
        break; 
    case '**':
        console.log(e**f);
        break; 
    default:
        console.log("enter operation from [+,-,*,/,%,**]")
        break;
}  
