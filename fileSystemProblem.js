// Input: file-names = ["Valorant","Valorant(1)","Valorant","Valorant(2019)"]
// Output: ["Valorant","Valorant(1)","Valorant(2)","Valorant(2019)"]

let file_names = ["Valorant", "Valorant(1)", "Valorant", "Valorant(2019)"];

let obj = {};

file_names = file_names.map((item) => {
  let indexOfOpenBracket = item.indexOf("(");
  let indexOfCloseBracket = item.indexOf(")");

  if (indexOfOpenBracket < 0 && !obj[item]) {
    obj[item] = 1;
    return item;
  }

  if (indexOfOpenBracket > 0) {
    var num = Number(item.substring(indexOfOpenBracket + 1, indexOfCloseBracket));
    if (num > obj[item] || !obj[item]) {
      obj[item] = num;
      return item;
    }
  }
  if (indexOfOpenBracket > 0) {
    item = item.substring(0, indexOfOpenBracket) + `(${++obj[item]})`;
  } else {
    item = item + `(${++obj[item]})`;
  }

  return item;
});

console.log(file_names);
