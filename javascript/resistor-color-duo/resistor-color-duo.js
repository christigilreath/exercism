//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorsArray) => {
  const firstColor = colorsArray[0];
  const secondColor = colorsArray[1];
  return (
    COLORS.indexOf(firstColor).toString() +
    COLORS.indexOf(secondColor).toString()
  );
};

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
