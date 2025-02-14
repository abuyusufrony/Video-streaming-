// const isnumber = true;
// if (isnumber === true) {
//     console.log("the number are true")
// }
// else {
//     console.log('number are false')
// }
// console.log(`${isnumber === true ? "true" : "false"}`)
function gettime(time) {
    const hour = parseInt(time / 3600);
    let remaingsec = parseInt(time) % 3600;
    const min = parseInt(remaingsec / 60);
    remaingsec = remaingsec % 60;
    return ` ${hour} hour ago and ${min} minate ago ${remaingsec} sec `;

}
console.log(gettime(6500))