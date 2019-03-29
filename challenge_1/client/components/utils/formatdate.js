export default function renderDate(d) {
  if (d.charAt(0) === '-'){
    return d.substring(1) + ' BC';
  } else {
    return d;
  }
}