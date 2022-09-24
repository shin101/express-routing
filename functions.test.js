const {mean, median, mode} = require("./functions");


describe('does mean function work?',function(){
    test('see if it calculates mean correctly',function(){
        expect(mean([1,2,3,4])).toEqual(2.5);
    })
});

describe('does median function work?', function(){
    test('see if it calculates median correctly',function(){
        expect(median([1,2,3,4,5])).toEqual(3);
    })
});


describe('does mode function work?', function(){
    test('see if it calculates mode correctly', function(){
        expect(mode([1,2,3,3,4,5])).toEqual(3);
    })
});
