const users = [
  { id: 1, firstName: "Alice", lastName: "Smith", age: 27, gender: "female" },

  { id: 2, firstName: "Bob", lastName: "Johnson", age: 30, gender: "male" },

  { id: 3, firstName: "Charlie", lastName: "Brown", age: 35, gender: "male" },

  { id: 4, firstName: "Diana", lastName: "Miller", age: 28, gender: "female" },

  { id: 5, firstName: "Eve", lastName: "Davis", age: 22, gender: "female" },

  { id: 6, firstName: "Rihana", lastName: "Zabih", age: 34, gender: "female" },

  { id: 7, firstName: "Eve", lastName: "Doe", age: 40, gender: "female" },

  { id: 8, firstName: "Rayan", lastName: "Beigi", age: 8, gender: "male" },

  { id: 9, firstName: "Musio", lastName: "Beigi", age: 39, gender: "male" },

  { id: 10, firstName: "Liana", lastName: "Beigi", age: 10, gender: "female" },
];
const userContainer = document.querySelector(".userContainer");
const filterInput = document.querySelector("input");
const filterBtn = document.querySelector("button");

window.onload = function () {
  filterInput.value = "";
  userContainer.innerHTML = "";
};
function generateUserCard(users) {
  let str = " ";
  users.forEach((user) => {
    str += `
        <div class="userItem">
          <p><b>first Name :</b>${user.firstName}</p>
          <p><b>last Name :</b>${user.lastName}</p>
          <p><b>age :</b>${user.age}</p>
          <p><b>gender :</b>${user.gender}</p>
        </div>`;
  });
  return str;
}

filterBtn.onclick = function () {
  const inputValue = filterInput.value.toLocaleLowerCase();
  const filteredUsers = users.filter((user) =>
    user.firstName.toLocaleLowerCase().startsWith(inputValue),
  );
  if (filteredUsers.length > 0) {
    userContainer.innerHTML = generateUserCard(filteredUsers);
  } else {
    userContainer.innerHTML = "<p>No users found.</p>";
  }
};
filterInput.addEventListener("input", function () {
  if (filterInput.value.trim() === "") {
    userContainer.innerHTML = "";
  }
});
