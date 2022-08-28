/*
-----------------------HW1---------------------------
Input: Nhập vào ngày tháng năm
Process: 1. Nếu tháng nhập vào là 1,3,5,7,8,10,12 thì có tối đa 31 ngày
         2. Tháng 2 có tối đa 28 ngày
         3. Và các tháng còn lại có tối đa 30 ngày
         4. + thêm 1 vào ngày vừa nhập nếu lớn hơn số ngày tối đa thì trả về giá trị một đồng thời cộng 1 vào tháng được nhập vô 
         5. Nếu tháng được tăng lên vượt quá 12 thì sẽ trả về một đồng thời năm tăng lên 1
Output: Xuất ra các giá trị ngày tháng năm sau khi được tăng lên 1
*/
var day;
var month;
var year;

function NextDay(day, month, year) {
  var maxDay, maxMonth;
  day = day + 1;
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    maxDay = 31;
    if (day > maxDay) {
      day = 1;
      month += 1;
    }
  } else if (month == 2) {
    maxDay = 28;
    if (day > maxDay) {
      day = 1;
      month += 1;
    }
  } else {
    maxDay = 30;
    if (day > maxDay) {
      day = 1;
      month += 1;
    }
  }
  if (month > 12) {
    month = 1;
    year += 1;
  }

  console.log("Ngay tháng năm của ngày tiếp theo là ", day, month, year);
}

NextDay(30, 12, 2022);
/*
Input: Nhập vào ngày tháng năm
Process: 1. Nếu tháng nhập vào là 1,3,5,7,8,10,12 thì tháng trước đó sẽ có tối đa 30 ngày
         2. Tháng 2 thì tháng trước đó sẽ có tối đa 31 ngày
         3. Và các tháng còn lại có tối đa 31 ngày
         4. - thêm 1 vào ngày vừa nhập nếu kết quả bé hơn 1 thì trả về giá trị ngày tối đa của tháng trước đó 
         5. Nếu tháng được trừ 1 bé hơn 1 thì sẽ trả về tháng lớn nhât là 12 đồng thời giá trị năm sẽ trừ đi 1
Output: Xuất ra các giá trị ngày tháng năm sau khi được giảm 1 
*/
function PreviousDay(day, month, year) {
  var preDay;
  day = day - 1;
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    preDay = 30;
    if (day < 1) {
      day = preDay;
      month -= 1;
    }
  } else if (month == 2) {
    preDay = 31;
    if (day < 1) {
      day = 31;
      month -= 1;
    }
  } else {
    preDay = 31;
    if (day < 1) {
      day = preDay;
      month -= 1;
    }
  }
  if (month < 1) {
    month = 12;
    year -= 1;
  }

  console.log("Ngay tháng năm của ngày trước đó là ", day, month, year);
}

PreviousDay(30, 1, 2022);

//--------------------HW2----------------

function checkYear(year) {
  // Nếu số năm chia hết cho 400,
  // đó là 1 năm nhuận
  if (year % 400 == 0) return true;

  // Nếu số năm chia hết cho 4 và không chia hết cho 100,
  // đó là 1 năm nhuận
  if (year % 4 == 0 && year % 100 != 0) return true;

  // trường hợp còn lại
  // không phải năm nhuận
  return false;
}

function checkDateOfMonth(month, year) {
  var day;
  if (checkYear(year)) {
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      day = 31;
    } else if (month == 2) {
      day = 29;
    } else {
      day = 30;
    }
  } else {
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      day = 31;
    } else if (month == 2) {
      day = 28;
    } else {
      day = 30;
    }
  }
  console.log("Số ngày tối đa là ", day);
}

checkDateOfMonth(1, 2020);

//-------------HW3---------------
a = 123;
if (a < 100 && a > 999) {
  console.log("Số này không hợp lệ");
}

var donvi = a % 10;
a = Math.floor(a / 10);
var chuc = a % 10;
var tram = Math.floor(a / 10);

console.log("Số a là ", tram, chuc, donvi);

//--------------HW4---------------
