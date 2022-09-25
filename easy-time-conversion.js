function timeConversion(s) {
    // split input into the values we want using slice
    let hours = s.slice(0, 2);
    let ampm = s.slice(-2);
    let middle = s.slice(2, -2);
    
    // adjust values with if statements
    if (ampm === 'PM' && hours !== `12`) hours = parseInt(hours) + 12;
    if (ampm === 'AM' && hours === `12`) hours = '00';
    
    // concatenate new values and return
    return hours + middle;
}