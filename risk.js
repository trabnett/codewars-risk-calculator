function battleOutcome( attacker , defender ) {
    let res = [0,0];
    let rolls = 0
    sortedAtt = [...attacker].sort((a, b)  =>  b - a);
    sortedDef = [...defender].sort((a,b) => b - a);
    (sortedAtt.length > sortedDef.length) ? rolls = defender.length : rolls = attacker.length
    for (i = 0; i < rolls; i++){
        sortedAtt[i] <= sortedDef[i] ? res[0] += 1 : res[1] += 1
    }
    return res
}

console.log(battleOutcome([4,6,5,4,5],[4,4,5,5]))