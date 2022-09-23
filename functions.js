

function mean(num){
    let sum = 0;
    for (let i=0;i=num.length;i++){
        sum+=num
    }
    let avg = sum/num.length;
    return avg;
}

function median(num){

}

function mode(num){

}

module.exports = {
    mode:mode,
    median:median,
    mean:mean
}