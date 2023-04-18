let month = parseInt(prompt("Nhập tháng (1-12): "));
let year = parseInt(prompt("Nhập năm: "));
let daysInMonth;
switch (month) {
  case 2:
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
      daysInMonth = 29;
    } else {
      daysInMonth = 28;
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    daysInMonth = 30;
    break;
  default:
    daysInMonth = 31;
    break;
}
alert(`Tháng ${month} năm ${year} có ${daysInMonth} ngày`);
