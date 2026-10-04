const prompt = require("prompt-sync")();

function isAnagram() {
    const firstStr = prompt("Enter a first string: ").toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
    const secStr = prompt("Enter a second string: ").toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");

    let isAna = firstStr.length === secStr.length;
    // for(let i = 0; i < firstStr.length ; i++ ) {
    //     if(firstStr[i] !== secStr[i]) {
    //         isAna = false;
    //         break;
    //     }
    // } ไม่ต้องใช้เพราะมันเรียงแล้วเทียบคำได้เลย

    if(isAna) {
        console.log(`${firstStr} and ${secStr} is Anagram`);
    } else {
        console.log(`${firstStr} and ${secStr} is not Anagram`);
    }
    
}

isAnagram();