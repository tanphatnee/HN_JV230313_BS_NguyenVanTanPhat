
let month = parseInt(prompt("Nhập vào tháng:"));
let year = parseInt(prompt("Nhập vào năm:"));
let daysInMonth = new Date(year, month, 0).getDate();
alert("Số ngày trong tháng đó là: " + daysInMonth);
