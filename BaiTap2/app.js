
let sentence = prompt("Nhập câu của bạn:");
sentence = sentence.trim();
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
   let word = words[i];
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    words[i] = word;
}
let normalizedSentence = words.join(" ");
alert("Câu của bạn sau khi được chuẩn hóa: "+normalizedSentence);
