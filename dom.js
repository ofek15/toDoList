const list = document.getElementById("list");
const button = document.getElementById("button");
const clear = document.getElementById("clear");
const input1 = document.getElementById("text1");

button.addEventListener("click", function () {
  const abale = document.createElement("div");
  const checkbox1 = document.createElement("input");
  checkbox1.setAttribute("type", "checkbox");
  abale.append(checkbox1);

  let span1 = document.createElement("span");
  span1.classList.add("span1-style");
  span1.innerText = input1.value;
  abale.append(span1);

  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "delete-btn");
  deleteButton.innerText = "x";
  abale.append(deleteButton);

  abale.classList.add("task");
  deleteButton.classList.add("delete-style");
  checkbox1.classList.add("checkbox-style");
  list.append(abale);
  input1.value = "";

  deleteButton.addEventListener("click", function () {
    list.removeChild(abale);
  });

  let checkColor = true;
  checkbox1.addEventListener("click", function () {
    if (checkColor == true) {
      abale.classList.add("new-color");
      console.log("change");
      checkColor = false;
    } else {
      abale.classList.remove("new-color");
      console.log("changeagain");
      checkColor = true;
    }
  });
  checkText = true;
  span1.addEventListener("click", function () {
    if (checkText == true) {
      span1.style.textDecoration = "line-through";
      abale.style.opacity = "0.5";
      checkText = false;
    } else {
      span1.style.textDecoration = "none";
      abale.style.opacity = "1";
      checkText = true;
    }
  });
});
clear.addEventListener("click", function () {
  for (let i = list.childNodes.length - 1; i >= 0; i--) {
    if (list.childNodes[i].childNodes[0].checked) {
      console.log(list.childNodes[i]);
      list.removeChild(list.childNodes[i]);
    }
  }
});
