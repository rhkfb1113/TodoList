function addList() {
  const toDoForm = document.querySelector(".toDoForm");
  const toDoInput = toDoForm.querySelector("input").value;
  const node = document.createElement("li");
  const textnode = document.createTextNode(toDoInput);
  node.appendChild(textnode);
  node.onclick = function() {
    if (this.style.textDecoration == "line-through") {
      this.style.textDecoration = "none";
    } else {
      this.style.textDecoration = "line-through";
    }
  };
  document.getElementById("myList").appendChild(node);
  document.getElementById("inputForm").value = null;
}

function enterkey() {
  if(window.event.keyCode == 13) {
    addList();
  }
}