import compact from 'lodash/compact';

const func = () => {};

function delimitArr(
    {
      input,
      delimiter = [' ', '|'],//[',',':'] type or key-value
      each = func,
    },
) {
  if (!input) {
    return;
  }
  // console.log('---input `', input, '` ---');
  input = Array.isArray(input) ? input : [input];
  const returnValues = [];
  compact(input).forEach(value => {
    if (!(typeof value === 'string')) return;
    const values = delimitString({string: value, delimiter, each});
    returnValues.push(values);
  });
  return returnValues;
}

function delimitString(
    {
      string,
      delimiter = [' ', '|'],//[',',':'] type or key-value
      each = func,
    },
) {
  if (!string) {
    return;
  }
  delimiter = Array.isArray(delimiter) ? delimiter : [delimiter];
  const result = compact(string.split(delimiter[0]));
  // console.log({result});
  const returnValues = [];
  result.forEach(str => {
    let values = [str];
    // console.log({str});
    if (delimiter[1] && (str.indexOf(delimiter[1]) > -1)) {
      values = str.split(delimiter[1]);
    }
    // console.log('each', values, '---');
    returnValues.push(values);
    if (each) each(values);
  });
  return returnValues;
}

const delimit = delimitArr;
export default delimit;
