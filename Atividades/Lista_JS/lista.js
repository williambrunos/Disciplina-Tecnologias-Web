// Questão 1
const isArray = array => Array.isArray(array);

// Questão 2
const cloneArray = array => [...array];

// Questão 3
const getNFirstElementsOfArray = (array, n=null) => {
    if (n) {
        return array.slice(0, n);
    } else {
        return array[0];
    }
};

// Questão 4
const getNLastElementsOfArray = (array, n=null) => {
    if (n) {
        return array.slice(-n);
    } else {
        return array.slice(-1);
    }
};

// Questão 5
const conatenateArrayInString = array => array.join();

// Questão 6
const isEven = number => number % 2 === 0;

const putHifenBetweenEveryEvenNumberPairs = number => {
    numberAsString = number.toString();
    numberAsArray = numberAsString.split('');
    

};

// Questão 7
const getElementsFrequencies = frequencies => {
    const elementsCount = Object.entries(frequencies);

    let majorCount = 0;
    let majorElement = '';
    elementsCount.forEach(element => {
        let elementName = element[0];
        let elementCount = element[1];
        
        if (elementCount > majorCount) {
            majorCount = elementCount;
            majorElement = elementName;
        }
    });

    return [majorElement, majorCount];
};

const getTheMostFrequentElement = array => {
    // Retorna na forma: [nome do elemento mais frequente, frequência do elemento]
    const frequencies = {};
    array.map(element => {
        if (element in frequencies) frequencies[element] += 1;
        else {
            frequencies[element] = 1;
        }
    });

    return getElementsFrequencies(frequencies);
};

// Questão 8
const removeDuplicates = array => {
    array.map((element, index) => {
        if (typeof element == "string") {
            array[index] = element.toLowerCase();
        }
    });
    return [...new Set(array)];
};

// Questão 9
const differenceBetweenFirstAndSecondSet = (firstSet, secondSet) => {
    const _difference = new Set(firstSet);
    for (const elem of secondSet) {
        _difference.delete(elem);
    }

    return _difference;
};

const sumDifferentArrayValues = (firstArray, secondArray) => {
    const firstSet = new Set(firstArray);
    const secondSet = new Set(secondArray);

    const uniqueFirstArrayValues = [...differenceBetweenFirstAndSecondSet(firstSet, secondSet)];
    const uniqueSecondArrayValues = [...differenceBetweenFirstAndSecondSet(secondSet, firstSet)];

    let sum = 0;
    sum += uniqueFirstArrayValues.reduce((a, b) => a + b, 0);
    sum += uniqueSecondArrayValues.reduce((a, b) => a + b, 0);

    return sum;
};

// Questão 10
const mergeArrays = (vetorPilha, vetorAdiciona) => [...vetorPilha, ...vetorAdiciona];


// Main de testes
console.log(`=== Questão 1 ===\n${isArray([1, 2, 3, 4])}\n${isArray({'nome': 'batman'})}`);
console.log(`=== Questão 2 === \n${cloneArray([1, 2, 3, 4])}`);
console.log(`=== Questão 3 PASSANDO N === \n${getNFirstElementsOfArray([1, 2, 3, 4, 5], n=3)}`);
console.log(`=== Questão 3 SEM PASSAR N === \n${getNFirstElementsOfArray([1, 2, 3, 4, 5])}`);
console.log(`=== Questão 4 PASSANDO N === \n ${getNLastElementsOfArray([1, 2, 3, 4, 5], n=3)}`);
console.log(`=== Questão 4 SEM PASSAR N === \n${getNLastElementsOfArray([1, 2, 3, 4, 5])}`);
console.log(`=== Questão 5 ===\n${typeof conatenateArrayInString([1, 2, 3, 4, 5])}`)/
console.log(`=== QUESTÃO 6 ===`);
console.log(`=== QUESTÃO 7 === \n${getTheMostFrequentElement([1, 1, 1, 1, 1, 2, 3, 4, 5, 6])}`);
console.log(`=== QUESTÃO 8 === \n${removeDuplicates([1, "apple", "papple", "apple", "Apple", 2, 3, 4, 4, 5, 6])}`);
console.log(`=== QUESTÃO 9 ===\n${sumDifferentArrayValues([1, 2, 3, 4], [3, 4, 5])}`);
console.log(`=== QUESTÃO 10 === \n${mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])}`);
