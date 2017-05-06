    var fs = require("fs");
    var text = fs.readFileSync("./text.txt").toString('utf-8');
    var textByLine = text.split("\n");

    var monk_and_modulo = function (textByLine) {
        var input = {
            n: null,
            k: null,
            inputArray: []
        };
        input.n = parseInt(textByLine[0].split(" ")[0]);
        input.k = parseInt(textByLine[0].split(" ")[1]);

        for (var i = 0; i < input.n; i++) {
            input.inputArray[i] = parseInt(textByLine[1].split(" ")[i]);
        }
        console.log(input);

        var sortedArray = moduloFunc(input);
        console.log(sortedArray);

    }(textByLine);

    function moduloFunc(input) {
        var sortedArray = input.inputArray.slice();
        var tempSmall;
        for (var i = 0; i < sortedArray.length; i++) {
            tempSmall = 0;
            for (var j = 0; j < sortedArray.length; j++) {
                if (sortedArray[i] % input.k <= sortedArray[j] % input.k) {
                    tempSmall = sortedArray[i];
                    sortedArray[i] = sortedArray[j];
                    sortedArray[j] = tempSmall;
                }
            }
        }
        return sortedArray;
    }