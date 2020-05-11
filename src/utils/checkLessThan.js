export default function checkLessThan(val, sym = 2) {
  val = Number(val);
  val = isNaN(val) ? 0 : val;
  sym = Number(sym);
  sym = isNaN(sym) || sym < 0 ? 2 : sym;
  for (let i = 0; i < sym; i++) {
    if(val.toString().length <= i) {
      val = `0${val}`;
    }
  }
  return val;
}
