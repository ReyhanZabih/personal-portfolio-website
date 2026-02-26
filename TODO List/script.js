const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Add task
addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});

// Enter key support
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});
