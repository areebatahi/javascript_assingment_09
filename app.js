// 1.
// function powerValue(a, b) {
//   if(b === 0){
//     return 1;
//   }
//   for(var i = 1; i < b; i++){
//     c = a * a;
//   }
//     return c;
// }
// var a = +prompt("Enter base value");
// var b = +prompt("Enter power value");
// document.write(powerValue(a, b));


// 2.
// function leapYear(year){
//     var date = new Date(year, 1, 29);
//     var getMonth = date.getMonth();
//     if(getMonth === 1){
//         return "It's leap year"
//     }else{
//         return "It's not leap year"
//     }
// }
// var y = +prompt("Enter any year")
// document.write(leapYear(y));


// 3.
// function valueOfS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function valueOfArea(a, b, c) {
//     var S = valueOfS(a, b, c)
//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area.toFixed(2);
// }
// var a = +prompt("Enter value 'a' in a traingle");
// var b = +prompt("Enter value 'b' in a traingle");
// var c = +prompt("Enter value 'c' in a traingle");
// document.write(valueOfArea(a, b, c));


// 4.
// function studentMarkSheet() {
//     var subject1 = +prompt("Enter marks of subject 1");
//     var subject2 = +prompt("Enter marks of subject 2");
//     var subject3 = +prompt("Enter marks of subject 3");
//     var total = subject1 + subject2 + subject3;
//     function studentAverage() {
//         var average = total / 3;
//         return "The average of student is " + average;
//     }
//     function studentPercentage() {
//         var percentage = (total / 300) * 100;
//         return "The percentage of student is " + percentage.toFixed(2) + "%";
//     }
//     return studentAverage() + "<br>" + studentPercentage();
// }
// document.write(studentMarkSheet());


// 5.
// function indexOfFunction(str, char) {
//     var caseStr = str.toLowerCase();
//     for (var i = 0; i < caseStr.length; i++) {
//         if (caseStr[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }
// document.write(indexOfFunction("javascript", "v"));


// 6.
// var str = prompt("Enter a string");
// function vowelDelete() {
//     var str1 = str.toLowerCase();
//     if(str1.length <= 25){
//         alert("that the sentence is not more than 25 characters long.")
//     }
//     var replace = str1.replace(/a/g, "");
//     var replace1 = replace.replace(/i/g, "");
//     var replace2 = replace1.replace(/e/g, "");
//     var replace3 = replace2.replace(/o/g, "");
//     var replace4 = replace3.replace(/u/g, "");
//     return replace4
// }
// document.write(str + "<br>" + vowelDelete());


// 7.
// function countVowelPairs(text) {
//     text = text.toLowerCase();
//     for (var i = 0; i < text.length - 1; i++) {
//       var pair = text[i] + text[i + 1];
//       switch (pair) {
//         case 'aa':
//             document.write("aa" + "<br>");
//                break;
//         case 'ae':
//             document.write("ae" + "<br>");
//                break;
//         case 'ai':
//             document.write("ai" + "<br>");
//                break;
//         case 'ao':
//             document.write("ao" + "<br>");
//                break;
//         case 'au':
//             document.write("au" + "<br>");
//                break;
//         case 'ea':
//             document.write("ea" + "<br>");
//                break;
//         case 'ee':
//             document.write("ee" + "<br>");
//                break;
//         case 'ei':
//             document.write("ei" + "<br>");
//                break;
//         case 'eo':
//             document.write("eo" + "<br>");
//                break;
//         case 'eu':
//             document.write("eu" + "<br>");
//                break;
//         case 'ia':
//             document.write("ia" + "<br>");
//                break;
//         case 'ie':
//             document.write("ie" + "<br>");
//                break;
//         case 'ii':
//             document.write("ii" + "<br>");
//                break;
//         case 'io':
//             document.write("io" + "<br>");
//                break;
//         case 'iu':
//             document.write("iu" + "<br>");
//                break;
//         case 'oa':
//             document.write("oa" + "<br>");
//                break;
//         case 'oe':
//             document.write("oe" + "<br>");
//                break;
//         case 'oi':
//             document.write("oi" + "<br>");
//                break;
//         case 'oo':
//             document.write("oo" + "<br>");
//                break;
//         case 'ou':
//             document.write("ou" + "<br>");
//                break;
//         case 'ua':
//             document.write("ua" + "<br>");
//                break;
//         case 'ue':
//             document.write("ue" + "<br>");
//                break;
//         case 'ui':
//             document.write("ui" + "<br>");
//                break;
//         case 'uo':
//             document.write("uo" + "<br>");
//                break;
//         case 'uu':
//             document.write("uu" + "<br>");
//           break;
//       }
//     }
//   }

//   var text = "Pleases read this application and give me gratuity";
//   console.log(countVowelPairs(text));


// 8.
// var kmInput = +prompt("Enter karachi to hydarabad distance in km");
// function meter() {
//     var m = kmInput * 1000;
//     return "karachi to hydarabad distance in meter is " + m + " km <br>";
// }
// function feet() {
//     var ft = (kmInput * 1000) * 3.28084;
//     return "karachi to hydarabad distance in feet is " + ft.toFixed(3) + " km <br>";
// }
// function inches() {
//     var inc = ((kmInput * 1000) * 3.28084) * 12;
//     return "karachi to hydarabad distance in inches is " + inc + " km <br>";
// }
// function centimeters() {
//     var cm = (((kmInput * 1000) * 3.28084) * 12) * 2.54;
//     return "karachi to hydarabad distance in centimeters is " + cm + " km <br>";
// }
// document.write("karachi to hydarabad distance in km is " + kmInput + " km <br>" + meter() + feet() + inches() + centimeters());

// 9.