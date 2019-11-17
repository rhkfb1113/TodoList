function addList() {
  const toDoForm = document.querySelector(".toDoForm");
  const toDoInput = toDoForm.querySelector("input").value;
  const node = document.createElement("li");
  const removeButton = document.createElement("button");
  const textnode = document.createTextNode(toDoInput);

  node.appendChild(textnode);
  node.appendChild(removeButton).innerHTML = "remove";
  node.onclick = function() {
    if (this.style.textDecoration == "line-through") {
      this.style.textDecoration = "none";
    } else {
      this.style.textDecoration = "line-through";
    }
  };
  removeButton.onclick = function() {
    this.parentElement.remove(this);
  };
  document.getElementById("myList").appendChild(node);
  document.getElementById("inputForm").value = null;
}

function enterkey() {
  if (window.event.keyCode == 13) {
    addList();
  }
}

function removeAll() {
  document.getElementById("myList").innerHTML = "";
}