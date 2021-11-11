function DispButtonGuests() {
  document.querySelector(".guests-choice___select_visit__blocknumber").style.display = "block";
  document.querySelector(".button_visit___select_visit__blocknumber").style.border = "1px solid rgba(31, 32, 65, 0.5)";
  document.querySelector(".button_visit___select_visit__blocknumber").style.borderRadius = "4px 4px 0px 0px";
  document.querySelector(".button_visit___select_visit__blocknumber").style.borderBottom = "0px";
};
/*кнопки плюс минус*/
function ClickButtonMinusAdults() {
  var per = parseFloat(document.querySelector(".adults-text").innerHTML) - 1;
  if (per == 0) document.querySelector(".adults_minus").style.opacity = 0.38;
  if (per < 0) return 0;
  document.querySelector(".adults-text").innerHTML = per;
  var guests = parseFloat(document.querySelector(".the-guests").innerHTML) - 1;
  var word;
  if (guests == "1") word = "гость";
  if (guests >= 2 && guests <= 4) word = "гостя";
  if (guests == 0 || guests >= 5) word = "гостей";
  document.querySelector(".the-guests").innerHTML = guests + " " + word;
}
function ClickButtonPlusAdults() {
  var per = parseFloat(document.querySelector(".adults-text").innerHTML) + 1;
  if (per > 0) document.querySelector(".adults_minus").style.opacity = 1;
  document.querySelector(".adults-text").innerHTML = per;
  var guests = parseFloat(document.querySelector(".the-guests").innerHTML) + 1;
  var word;
  if (guests == "1") word = "гость";
  if (guests >= 2 && guests <= 4) word = "гостя";
  if (guests == 0 || guests >= 5) word = "гостей";
  document.querySelector(".the-guests").innerHTML = guests + " " + word;
}
function ClickButtonMinusChildren() {
  var per = parseFloat(document.querySelector(".children-text").innerHTML) - 1;
  if (per == 0) document.querySelector(".children_minus").style.opacity = 0.38;
  if (per < 0) return 0;
  document.querySelector(".children-text").innerHTML = per;
  var guests = parseFloat(document.querySelector(".the-guests").innerHTML) - 1;
  var word;
  if (guests == "1") word = "гость";
  if (guests >= 2 && guests <= 4) word = "гостя";
  if (guests == 0 || guests >= 5) word = "гостей";
  document.querySelector(".the-guests").innerHTML = guests + " " + word;
}
function ClickButtonPlusChildren() {
  var per = parseFloat(document.querySelector(".children-text").innerHTML) + 1;
  if (per > 0) document.querySelector(".children_minus").style.opacity = 1;
  document.querySelector(".children-text").innerHTML = per;
  var guests = parseFloat(document.querySelector(".the-guests").innerHTML) + 1;
  var word;
  if (guests == "1") word = "гость";
  if (guests >= 2 && guests <= 4) word = "гостя";
  if (guests == 0 || guests >= 5) word = "гостей";
  document.querySelector(".the-guests").innerHTML = guests + " " + word;
}
function ClickButtonMinusBabies() {
  var per = parseFloat(document.querySelector(".babie-text").innerHTML) - 1;
  if (per == 0) document.querySelector(".babies_minus").style.opacity = 0.38;
  if (per < 0) return 0;
  document.querySelector(".babie-text").innerHTML = per;
  var guests = parseFloat(document.querySelector(".the-guests").innerHTML) - 1;
  var word;
  if (guests == "1") word = "гость";
  if (guests >= 2 && guests <= 4) word = "гостя";
  if (guests == 0 || guests >= 5) word = "гостей";
  document.querySelector(".the-guests").innerHTML = guests + " " + word;
}
function ClickButtonPlusBabies() {
  var per = parseFloat(document.querySelector(".babie-text").innerHTML) + 1;
  if (per > 0) document.querySelector(".babies_minus").style.opacity = 1;
  document.querySelector(".babie-text").innerHTML = per;
  var guests = parseFloat(document.querySelector(".the-guests").innerHTML) + 1;
  var word;
  if (guests == "1") word = "гость";
  if (guests >= 2 && guests <= 4) word = "гостя";
  if (guests == 0 || guests >= 5) word = "гостей";
  document.querySelector(".the-guests").innerHTML = guests + " " + word;
}

