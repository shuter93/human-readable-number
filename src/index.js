module.exports = function toReadable (number) {
    let edenici = {        
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',    
    };
    let desaytki = {        
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',    
    }; 
    let isklucheniya = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    number = number.toString().split('').reverse();
    let b = number.reduce((res, item, index, arr) => {  
        if (item == 0) {
            return res;
        }; 
        if (index === 0) {
            res.push(edenici[item]);
        } else if (index === 1 && item == 1) {
            res.splice(0, 1, isklucheniya[item + arr[0]]);      
        } else if (index === 1) {
            res.push(desaytki[item]);
        } else {
            res.push(edenici[item] + ' hundred');
        }
        return res;
    }, []);
    if (b.length === 0) {
        return 'zero'
    }
    return b.reverse().join(' ');
}
