
const testCase = {
"keys": {
    "n": 10,
    "k": 7
  },
  "1": {
    "base": "6",
    "value": "13444211440455345511"
  },
  "2": {
    "base": "15",
    "value": "aed7015a346d635"
  },
  "3": {
    "base": "15",
    "value": "6aeeb69631c227c"
  },
  "4": {
    "base": "16",
    "value": "e1b5e05623d881f"
  },
  "5": {
    "base": "8",
    "value": "316034514573652620673"
  },
  "6": {
    "base": "3",
    "value": "2122212201122002221120200210011020220200"
  },
  "7": {
    "base": "3",
    "value": "20120221122211000100210021102001201112121"
  },
  "8": {
    "base": "6",
    "value": "20220554335330240002224253"
  },
  "9": {
    "base": "12",
    "value": "45153788322a1255483"
  },
  "10": {
    "base": "7",
    "value": "1101613130313526312514143"
  }
}
const total = testCase.keys.n;
const polynomialDegree = testCase.keys.k - 1;

const parseValue = async ({ value, base }) => {
    const parsed = parseInt(value, base);
    return parsed;
};

const extractRoots = async () => {
    const parsedRoots = [];

    for (let index = 1; index <= total; index++) {
        if (testCase[index]) {
            const root = await parseValue(testCase[index]);
            parsedRoots.push(root);
        }
    }

    return parsedRoots.slice(0, polynomialDegree);
};

const computeCoefficients = (roots) => {
    const coefficients = [1];

    for (const root of roots) {
        coefficients.push(0);
        for (let i = coefficients.length - 1; i >= 1; i--) {
            coefficients[i] -= root * coefficients[i - 1];
        }
    }

    return coefficients;
};

const main = async () => {
    const roots = await extractRoots();
    const coefficients = computeCoefficients(roots);
    console.log("Coefficients:", coefficients);
};

main();
