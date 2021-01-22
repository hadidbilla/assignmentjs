//https://github.com/hadidbilla/assignmentjs

/*------------ convert an integer kilometer value to meters ----------------------*/

function kilometerToMeter(kilometer) {
  //Handel the special case.
  if (kilometer <= 0) {
    return "Zero and Negative value do not acceptable";
  } else return kilometer * 1000;
}
console.log(kilometerToMeter(5));

/*---------------------     End--problem---1      ------------------------------*/

/*---------------------------- budget calculator ------------------------------*/

function budgetCalculator(watch, phone, laptop) {
  //Handel the special case.
  if (watch <= 0 || phone <= 0 || laptop <= 0) {
    return "Zero and Negative value do not acceptable";
  } else return watch * 50 + phone * 100 + laptop * 500;
}
console.log(budgetCalculator(3, 3, 3));

/*----------------------------  End----problem--2  ----------------------------------*/

/*--------------------------------- Hotel Cost ------------------------------------*/

function hotelCost(howManyDays) {
  //Handel the special case.
  if (howManyDays <= 0)
    return "Sorry. Zero and Negative value never can be a day value";
  if (howManyDays >= 1 && howManyDays <= 10) return howManyDays * 100;
  if (howManyDays >= 11 && howManyDays <= 20)
    return (howManyDays - 10) * 80 + 1000; //1000 is 1 to 10 days total cost.
  if (howManyDays >= 21) {
    var overTwentyDays = (howManyDays - 20) * 50;
    return overTwentyDays + 1800; //1800 is 1 to 20 days total cost.
  }
}
console.log(hotelCost(27));

/*----------------------------   End----problem--3   ----------------------------------*/

/*--------------------------------- Mega Fridend --------------------------------------*/
function megaFriend(nameArry) {
  var friendList = nameArry;
  var maxName = "";
  for (var i = 0; i < friendList.length; i++) {
    var singleWord = friendList[i];
    if (singleWord.length > maxName.length) {
      maxName = singleWord;
    }
  }
  return maxName;
}
console.log(megaFriend(["Hadid", "Billa", "hridoy"]));
/*--------------------------------- End----problem--4 ----------------------------------*/
