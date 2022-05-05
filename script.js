const python = 87;
const javascript = 56;
const react = 92;
const java = 76;
const node = 63;
const totalmarks = 500;

const obtainedmarks = (python + javascript + react + node + java);
console.log("value of obtained marks is: ", obtainedmarks);

const totalpercentage = ((obtainedmarks/totalmarks)*100);
console.log("value of total percentage is: ", totalpercentage.toFixed(2));