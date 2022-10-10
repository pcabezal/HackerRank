function climbingLeaderboard(ranked, player) {
    //  120 100 100 50 50 40 40 25 20 10
    // 100 100 50 40 40 25 20 10
    // 5 25 50 120
    // 6 4 2 1
    
    let results = [];
    
    //iterate through player array with for loop
    for (let i = 0; i < player.length; i++ ) {
        // establish place variable set to 
        let place = 1;
        let lastValue = ranked[0];
        ranked.push(-Infinity)

        for (let j = 0; j < ranked.length; j++) {
            // if player[i] >= lastValue, insert player into ranked and break
            if (player[i] >= lastValue) {
                ranked.splice(j, 0, player[i]);
                break;
            } 
            if (ranked[j] !== lastValue) place++;
            lastValue = ranked[j];
        }
        results.push(place);
    }
    return results;
}

let ranked = [100, 100, 50, 40, 40, 20, 10]
let player = [5, 25, 50, 120]
console.log(climbingLeaderboard(ranked, player));

// for (let j = 0; j < ranked.length; j++) {
//     // only increment place is ranked[j] !== lastValue
//     if (ranked[j] !== lastValue) place++;
//     // check if ranked[j] == player[i]
//     if (ranked[j] == player[i]) break;
//     // set  ranked[j] to lastValue
//     lastValue = ranked[j];
// }
// results.push(place);