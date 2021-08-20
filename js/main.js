$(document).ready(function () {
  var currentFloor = 2; //переменная с текучим этажем//
  var floorPath = $(".home-image path"); //каждый от дельный этаж в SVG//
  var counterUp = $(".counter-up");     /*кнопка увеличения этажа*/
  var counterDown = $(".counter-down"); /*кнопка уменшения этажа*/
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats")

  //при наведениии мышкой на этаж//

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный клас у єтажей//
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего єтажа//
    $(".counter").text(currentFloor); //записываем значение этажа в счетчик//
  });
  floorPath.on('click', toggelModal);
  modalCloseButton.on('click', toggelModal);
  viewFlatsButton.on('click', toggelModal);

  counterUp.on("click", function () { //отслеживаем клик по кнопке вверх//
    if (currentFloor < 18) { //проверяем значение этажа//
      currentFloor++; //прибавляем 1 этаж//
      uscurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(uscurrentFloor);
      floorPath.removeClass("current-floor")
      $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor")
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      uscurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(uscurrentFloor);
      floorPath.removeClass("current-floor")
      $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor")
    }
  });
  function toggelModal() { //функция откриыть/закрыть окно
    modal.toggleClass("is-open");
  }

});
