const inchHeight = 72;
const poundWeight = 180;

const cmHeight = inchHeight * 2.54;
const kiloWeight = poundWeight / 2.2046;

const bmi = kiloWeight / Math.pow(cmHeight / 100, 2);

console.log(`Weight is ${kiloWeight} kilo or ${poundWeight} pounds`);
console.log(`Height is ${cmHeight} cm or ${inchHeight} inches`);
console.log(`BMI is ${bmi} `);
