let iAmGlobal = 'someValue'

if (true) {
    var iamLocal = 'someMoreValue'
    iAmGlobal = 'Superman'
    console.log(iAmGlobal);
    console.log(iamLocal);
}
console.log(iamLocal);
console.log(iAmGlobal);
