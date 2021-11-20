function DispButtonGuests() {
  document.querySelector(
    ".guests-choice___select_visit__blocknumber"
  ).style.display = "block";
  document.querySelector(
    ".button_visit___select_visit__blocknumber"
  ).style.border = "1px solid rgba(31, 32, 65, 0.5)";
  document.querySelector(
    ".button_visit___select_visit__blocknumber"
  ).style.borderRadius = "4px 4px 0px 0px";
  document.querySelector(
    ".button_visit___select_visit__blocknumber"
  ).style.borderBottom = "0px";
  if (document.querySelector(".the-guests").textContent == "Сколько гостей")
    document.querySelector(".the-guests").innerHTML = "0 гостей";
}
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
/*Календарь*/
function CheckBorderRadius() {
  var value = 0;
  var per = 0;
  var mas = document.querySelectorAll(
    ".number_line-one , .number_line-two , .number_line-three , .number_line-four , .number_line-five"
  );
  var check = 0;
  for (let i = 0; i < mas.length; i++) {
    if (mas[i].style.borderRadius == "50%") check = check + 1;
  }
  if (check > 2) return 0;
  else {
    for (let i = 0; i < mas.length; i++) {
      mas[i].onclick = function () {
        let now = new Date();
        let day = now.getDate();
        let month = now.getMonth();
        let year = now.getFullYear();
        var check = 0;
        for (let i = 0; i < mas.length; i++) {
          if (mas[i].style.borderRadius == "50%") check = check + 1;
        }
        if (check == 2) return 0;
        if (mas[i].textContent < day) return 0;
        if (check == 0)
          document.querySelector(
            "#arrival___input_way__blocknumber"
          ).textContent = mas[i].textContent + "." + month + "." + year;
        if (check == 1)
          document.querySelector("#exit___input_way__blocknumber").textContent =
            mas[i].textContent + "." + month + "." + year;
        mas[i].style.background =
          "linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)";
        mas[i].style.borderRadius = "50%";
        mas[i].style.color = "#fff";
        //mas[i].style.zIndex = "2";
      };
      if (mas[i].style.borderRadius == "50%") {
        per = per + 1;
      }
      if (mas[i].style.borderRadius == "50%" && per == 1) value = i + 1;
    }
    if (per == 1) return 0;

    var after = document.querySelectorAll(".after__number_line");
    for (let i = value - 1; i < after.length; i++) {
      if (i == 6 || i == 13 || i == 20 || i == 27 || i == 34) {
        after[i].style.width = "19.94px";
      }
      after[i].style.display = "block";
      after[i].style.left = "20px";
      after[i].style.zIndex = "-1";
      if (
        (i == 0 || i == 7 || i == 14 || i == 21 || i == 28) &&
        i != value - 1
      ) {
        after[i].style.width = "59.5px";
        after[i].style.left = "0px";
      }
      if (mas[i + 1].style.borderRadius == "50%") break;
    }
  }
}
window.onload = function TodaysDate() {
  let now = new Date();
  let day = now.getDate();
  var mas = document.querySelectorAll(
    ".number_line-one , .number_line-two , .number_line-three , .number_line-four , .number_line-five"
  );
  for (let i = 0; i < mas.length; i++) {
    if (parseFloat(mas[i].textContent) == day) {
      mas[i].style.borderRadius = "22px";
      mas[i].style.background =
        "linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)";
      mas[i].style.color = "#fff";
    }
  }
};
function СallingСalendar() {
  var per = document.querySelector(".calendar___input_way__blocknumber");
  per.style.display = "block";
}
function AcceptButtonCalendar() {
  document.querySelector(".calendar___input_way__blocknumber").style.display =
    "none";
}
function ResetButtonCalendar() {
  var mas = document.querySelectorAll(
    ".number_line-one , .number_line-two , .number_line-three , .number_line-four , .number_line-five"
  );

  for (let i = 0; i < mas.length; i++) {
    if (mas[i].style.borderRadius == "22px") continue;
    mas[i].style.background = "none";
    mas[i].style.borderRadius = "0%";
    mas[i].style.color = "rgba(31, 32, 65, 0.5)";
    document.querySelector("#arrival___input_way__blocknumber").textContent =
      "ДД.ММ.ГГГГ";
    document.querySelector("#exit___input_way__blocknumber").textContent =
      "ДД.ММ.ГГГГ";
  }
  var after = document.querySelectorAll(".after__number_line");
  for (let i = 0; i < mas.length; i++) {
    after[i].style.display = "none";
    after[i].style.left = "0px";
    after[i].style.width = "100%";
  }
}
function AcceptButtonGuests() {
  document.querySelector(
    ".guests-choice___select_visit__blocknumber"
  ).style.display = "none";
  document.querySelector(
    ".button_visit___select_visit__blocknumber"
  ).style.border = "1px solid rgba(31, 32, 65, 0.25)";
  document.querySelector(
    ".button_visit___select_visit__blocknumber"
  ).style.borderRadius = "4px";
  document.querySelector(
    ".button_visit___select_visit__blocknumber"
  ).style.borderBottom = "";
  if (document.querySelector(".the-guests").innerHTML == "0 гостей")
    document.querySelector(".the-guests").textContent = "Сколько гостей";
}
function ResetButtonGuests() {
  document.querySelector(".the-guests").innerHTML = "0 гостей";
  document.querySelector(".adults-text").innerHTML = "0";
  document.querySelector(".children-text").innerHTML = "0";
  document.querySelector(".babie-text").innerHTML = "0";
  document.querySelector(".adults_minus").style.opacity = 0.38;
  document.querySelector(".children_minus").style.opacity = 0.38;
  document.querySelector(".babies_minus").style.opacity = 0.38;
}
function OnfocusEmailBottom() {
  document.querySelector("#text-email_block-email").value = "";
}
function OnblurEmailBottom() {
  document.querySelector("#text-email_block-email").value = "Email";
}
function ClickButtonEnter() {
  document.querySelector("body").style.background =
    "url(images/image4.png) no-repeat";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector(".blocknumber").style.display = "none";
  document.querySelector(".text__content_main").style.display = "none";
  document.querySelector(".description_main").style.marginTop = "772px";
  document.querySelector(".enter-block").style.display = "block";
}
