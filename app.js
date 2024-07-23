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
// function indexofFunction(str, ltr) {
//     var changeStr = str.toLowerCase();
//     var changeltr = ltr.toLowerCase();
// for (var i = 0; i < changeStr.length; i++) {
//     if (changeStr[i] === changeltr) {
//         return "index of : " + i;
//     }
// }
// return "index of : " + -1;

//________using while loop_______
//     var i = 0;
//     while (i < changeStr.length) {
//         if (changeStr[i] === changeltr) {
//             return i;
//         }
//         i++
//     }
//     return -1;
// }
// console.log(indexofFunction("JavaScript", "P"));


// 6.
// function deleteVowels(str) {
//     var vowel = "aeiouAEIOU";
//     var result = "";
//     for (var i = 0; i < str.length; i++) {
//         if (vowel.indexOf(str[i]) === -1) {
//             result += str[i];
//         }
//     }
//     return result;
// }
// document.write(deleteVowels("tahira"));


// 7.
function countVowelpairs(str) {
    var count = 0;
    var i = 0;
    while (i < str.length - 1) {
        var char1 = str[i];
        var char2 = str[i + 1];
        var vowelPair = [];
        switch (true) {
            case (char1 === "a" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
            case (char1 === "e" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
            case (char1 === "i" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
            case (char1 === "o" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
            case (char1 === "u" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
                count++;
                vowelPair.push(char1 + char2);
                console.log(vowelPair);
                break;
        }
        i++
    }
    return count;
}
console.log(countVowelpairs("Pleases read this application and give me gratuity"));

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
// function claculateOverTimePay(hoursWorked) {
//     var regularHours = 40;
//     var overTimeRate = 12.00;
//     var overTimeHours = 0;
//     var overTimePay = 0.00;
//     if (hoursWorked > regularHours) {
//         overTimeHours = hoursWorked - regularHours;
//         overTimePay = overTimeRate * overTimeHours;
//     }
//     return overTimePay.toFixed(2);
// }
// var input = +prompt("Enter hours worked");
// console.log("Over time pay " + input + " hours worked is Rs." + claculateOverTimePay(input));


// 10.
// function calculateCurrencyNotes(amount) {
//     var hundreds = 0;
//     var fifties = 0;
//     var tens = 0;
//     while (amount >= 100) {
//         amount -= 100;
//         hundreds++;
//     }
//     while (amount >= 50) {
//         amount -= 50;
//         fifties++;
//     }
//     while (amount >= 10) {
//         amount -= 10;
//         tens++;
//     }
//     return {
//         hundreds: hundreds,
//         fifties: fifties,
//         tens: tens
//     };
// }
// let amount = 850;
// let notes = calculateCurrencyNotes(amount);
// console.log("Number of 100 notes:" + notes.hundreds);
// console.log("Number of 50 notes:" + notes.fifties);
// console.log("Number of 10 notes:" + notes.tens);
