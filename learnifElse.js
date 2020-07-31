
// if (false) { 
// console.log('I am inside if Block')
// console.log('I am still inside if block')
// } else if (true) { 
//     console.log('I am inside IF IN CAPS Block')
// } else {
//     console.log('NOTICE THIS PART')
// }

//LCO

var whoIsHere = ''

if (whoIsHere === 'user') {
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if(whoIsHere === 'teacher') {
    console.log('Greeting message for TEACHER')
    console.log('Allow access to view his courses')
} else {
    console.log('MESSAGE: please verify your email')
    console.log('Send user an email for verification')
}

