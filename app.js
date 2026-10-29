const tasks = [];
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

function render() {
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const div = document.createElement("div");
    div.textContent = tasks[i].text;
    list.appendChild(div);
  }
}
addBtn.addEventListener("click", () => {
  const text = input.value;
  tasks.push({text});
  input.value="";
  render();
});


