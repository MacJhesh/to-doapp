const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value;

  if (text.trim() === "") {
    alert("Please type a task first!");
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  list.appendChild(li);

  input.value = "";
});