
// Cách 2: Sử dụng hàm Sort.
let input = prompt("Nhập mảng bất kì cách nhau bằng dấu ','");
let arr = input.split(",");
arr = arr.map(Number);
arr.sort((a, b) => b - a);
alert("Mảng sau khi được sắp xếp giảm dần: " + arr);
