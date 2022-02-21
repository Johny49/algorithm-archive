// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    let hour = s.slice(0, 2);
    let minSec = s.slice(2, 8);
    let amPm = s.slice(-2);

    if (amPm === 'AM' && hour === '12') {
        hour = '00';
    } else if (amPm === 'PM' && hour !== '12') {
        hour = parseInt(hour) + 12;
    };

    return `${hour}${minSec}`;
}

// AM and hour not 12
let amTestTimeA = '10:48:56AM'
console.log(timeConversion(amTestTimeA));
// AM and hour is 12
let amTestTimeB = '12:02:27AM';
console.log(timeConversion(amTestTimeB));
// PM and hour is 12
let pmTestTimeA = '12:13:28PM';
console.log(timeConversion(pmTestTimeA));
// PM and hour is not 12
let pmTestTimeB = '08:23:37PM';
console.log(timeConversion(pmTestTimeB));
