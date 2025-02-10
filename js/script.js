const title = document.querySelector(".title");

let browser = "FireFox";

// if(browser == 'Edge') {
//     title.textContent = "You've got the Edge!";
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     title.textContent = 'Ми підтримуємо і ці браузери' ;
//   } else {
//     title.textContent =  'Маємо надію, що ця сторінка виглядає добре!' ;
//   }

switch (browser) {
  case "Edge":
    title.textContent = "You've got the Edge!";
    break;
  case "Chrome":
    title.textContent = "Ми підтримуємо і ці браузери";
    break;
  case "FireFox":
    title.textContent = "Ми підтримуємо і ці браузери";
    break;
  case "Safari":
    title.textContent = "Ми підтримуємо і ці браузери";
    break;
  case "Opera":
    title.textContent = "Ми підтримуємо і ці браузери";
    break;

  default:
    title.textContent = "Маємо надію, що ця сторінка виглядає добре!";
}
