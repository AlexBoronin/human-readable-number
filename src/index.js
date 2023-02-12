// module.exports =
function toReadable (number) {
    let units = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven',
                ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let dozens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let out = '';

    let numToString = number.toString();

    if(number < 20){
        return units[number]
    }else if(numToString.length === 3){
        out += units[parseInt(numToString[0])] + ' hundred';
        if(parseInt(numToString[1]) === 1){
            out += units[parseInt(numToString.slice(1))];
        }else {
            out += dozens[parseInt(numToString[1])] + units[parseInt(numToString[2])];
        }
        return out.trim()
    }
    return (dozens[parseInt(numToString[0])] + units[parseInt(numToString[1])]).trim()
}
console.log(toReadable('121'));

