//----------HW1--------
/*Input : Nhập vào số có 3 chữ số
 Process: So sánh số lớn nhất 3 số và set giá trị first
 Sau đó so sánh hai số còn lại với nhau và set second và third
 Output : In ra giá trị theo thứ tự tăng dần
*/
var a = 22;
var b = 24;
var c = 27;
var first = 0,
  second = 0,
  third = 0;

if (a > b && a > c) {
  var first = a;
  if (b > c) {
    var second = b;
    var third = c;
  } else {
    var second = c;
    var third = b;
  }
} else if (b > c && b > a) {
  var first = b;
  if (c > a) {
    var second = c;
    var third = a;
  } else {
    var third = c;
    var second = a;
  }
} else if (c > a && c > b) {
  var first = c;
  if (b > a) {
    var second = b;
    var third = a;
  } else {
    var third = b;
    var second = a;
  }
}
console.log("Số thứ tự tăng dần", third, second, first);
//----------------HW2----------------------
/*
Input: Nhập vào giá trị người sử dụng là A,B,M,E
Process:So sánh USER với các biến A,B,M,E
Output: Xuất ra giá trị in ra console
*/

console.log("Chương trình ai sử dụng máy:");
var A = "Anh Trai";
var B = "Bố";
var M = "Mẹ";
var E = "Em Gái";
var USER = B;

if (USER == A) {
  console.log("Xin chào anh Trai");
} else if (USER == B) {
  console.log("Xin chào Bố");
} else if (USER == M) {
  console.log("Xin chào Mẹ");
} else if (USER == E) {
  console.log("Xin chào Em Gái");
}

//----------------HW3----------------------
/*
Input: Nhập vào 3 số tự nhiên
Process: Kiểm tra từng số có chia hết cho hai không nếu chia hết thì tăng biến đếm chẵn lên 1 ko thì tăng biến đếm lẻ lên 1
Output: Xuất ra có bao nhiêu số chẵn và bao nhiêu số lẻ
*/
var a = 2;
var b = 6;
var c = 7;

var numberOfEven = 0;
var numberOfOdd = 0;

if (a % 2 == 0) {
  numberOfEven += 1;
} else {
  numberOfOdd += 1;
}
if (b % 2 == 0) {
  numberOfEven += 1;
} else {
  numberOfOdd += 1;
}
if (c % 2 == 0) {
  numberOfEven += 1;
} else {
  numberOfOdd += 1;
}
console.log("So le la", numberOfOdd);
console.log("So chan la", numberOfEven);

//------------HW4-------------------------
/*
Input: Nhập vào 3 cạnh tam giác
Process: 1. So sánh nếu trong 3 cạnh có 3 cạnh bằng nhau -> tam giác cân
         2. So sánh nếu trong 3 cạnh có 2 cạnh bằng nhau -> tam giác đều
         3. So sánh nếu một cạnh bình phương bằng tổng bình phương 2 cạnh còn lại -> tam giác vuông
*/
var canhA = 3;
var canhB = 4;
var canhC = 5;

if (canhA == canhB && canhC == canhA) {
  console.log("Tam giac deu");
} else if (canhA == canhB || canhB == canhC || canhA == canhC) {
  console.log("Tam giac can");
} else if (
  canhA * canhA == canhB * canhB + canhC * canhC ||
  canhB * canhB == canhA * canhA + canhC * canhC ||
  canhC * canhC == canhA * canhA + canhB * canhB
) {
  console.log("Tam giac vuong");
}
