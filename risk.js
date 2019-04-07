function battleOutcome( attacker , defender ) {
    res = [0,0];
    attacker.sort((a, b)  =>  b - a);
    defender.sort((a,b) => b - a);
    defender.length === 2 ? (attacker[0] <= defender[0] ? res[0] += 1 : res[1] += 1) + (attacker[1] <= defender[1] ? res[0] += 1 : res[1] += 1) : attacker[0] <= defender[0] ? res[0] += 1 : res[1] += 1
    return res
}

console.log(battleOutcome([4,6],[4,4]))