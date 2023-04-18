
// Cách 1: Không sử dụng hàm Sort.
let input = prompt("Nhập mảng bất kì cách nhau bằng dấu ','");
let arr = input.split(",");
arr = arr.map(Number);
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
alert("Mảng sau khi được sắp xếp giảm dần: " + arr);

