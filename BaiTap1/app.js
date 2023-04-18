
let arr = prompt("Nhập mảng của bạn, cách nhau bằng dấu phẩy (,)").split(",");
for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(arr[i]);
}
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
alert("Phần tử lớn nhất trong mảng của bạn là: " + max);
