const grade = 4;
let letter;
if (97 <= grade && grade <= 100){
    letter = "A+";
}else if (93 <= grade && grade < 97){
    letter = "A";
}else if (90 <= grade && grade < 93){
    letter = "A-";
}else if (87 <= grade && grade < 90){
    letter = "B+";
}else if (83 <= grade && grade < 87){
    letter = "B";
}else if (80 <= grade && grade < 83){
    letter = "B-";
}else if (77 <= grade && grade < 80){
    letter = "C+";
}else if (73 <= grade && grade < 77){
    letter = "C";
}else if (70 <= grade && grade < 73){
    letter = "C-";
}else if (67 <= grade && grade < 70){
    letter = "D+";
}else if (63 <= grade && grade < 67){
    letter = "D";
}else if (60 <= grade && grade < 63){
    letter = "D-";
}else {
    letter = "F";
}
switch(letter){
    case "A+":
    case "A":
    case "A-":
    case "B+":
    case "B":
    case "B-":
    case "C+":
    case "C":
    case "C-":
        result = "passed!";
        break
    case "D+":
    case "D":
    case "D-":
    case "F":
        result = "failed!";
}
console.log("Your grade is " + grade + " which corresponds to " + letter + ". You " + result);
