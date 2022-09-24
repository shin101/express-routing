

function mean(num){
    let sum = 0;
    for (let i=0;i<num.length;i++){
        sum += num[i]
    }
    return sum / num.length;
}

function median(num){
    num=num.sort();
    let middleIndex = Math.floor(num.length/2);

    return num.length % 2 === 0 ? (num[middleIndex] + num[middleIndex - 1]) / 2 : num[middleIndex];
}

function mode(num){
    const count = num.reduce((acc, x) => ({...acc, [x]: (acc[x] || 0) + 1 }), {});

    return +(Object.entries(count).sort((a, b) => b[1] - a[1])[0][0]);
}

module.exports = {
    mode,
    median,
    mean
}