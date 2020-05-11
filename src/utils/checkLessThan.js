export default function checkLessThan(val, sum = 10) {
  console.log(val, sum);
  val = Number(val);
  val = isNaN(val) ? 0 : val;
  sum.toString().split('').forEach((item, index) => {
    if(val.toString().length <= index) {
      val = `0${val}`;
    }
  });
  return val;
}
