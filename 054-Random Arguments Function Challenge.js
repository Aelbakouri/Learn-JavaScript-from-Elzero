/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status 
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/


function showDetails(a, b, c) {

    let info = [a, b, c],
        name,
        age,
        avaliability,
        sentance;
    for (let i = 0; i < 3; i++) {
        typeof info[i] === "string" ?
            (name = info[i]) :
            typeof info[i] === "number" ?
            (age = info[i]) :
            typeof info[i] === "boolean" ?
            (avaliability = info[i]) :
            "incorrect data type";
    }
    avaliability === true ?
        (sentance = "You are avaliable For Hire") :
        (sentance = "You are not avaliable For Hire");
    document.write(`<div>`);
    document.write(`Hello ${name}, Your age Is ${age} , ${sentance}`);
    document.write(`</div>`);

}
// normal solution
// function showDetails(a, b, c) {
//     let info = [a, b, c],
//         name, age, status, sentance;
//     for (let i = 0; i < info.length; i++) {
//         if (typeof info[i] === "string") {
//             name = info[i];
//         } else if (typeof info[i] === "number") {
//             age = info[i];
//         } else if (typeof info[i] === "boolean") {
//             status = info[i];
//         } else { "incorrect data type"; }
//         if (status === true) {
//             sentance = "You are avaliable For Hire";
//         } else {
//             sentance = "You are not avaliable For Hire";
//         }
//         document.write(`<div>`);
//         document.write(`Hello ${name}, Your age Is ${age} , ${sentance}`);
//         document.write(`</div>`);
//     }
// }
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"