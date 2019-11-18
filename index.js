function addList() {
  const toDoForm = document.querySelector(".toDoForm");
  const toDoInput = toDoForm.querySelector("input").value;
  const node = document.createElement("li");
  const removeButton = document.createElement("button");
  const textnode = document.createTextNode(toDoInput);
  removeButton.className = "btn btn-warning";
  removeButton.style.cssText = "font-size: 10px; font-weight: 900; margin-left: 30px; margin-top: -1px; padding: 5px";
  node.style.cssText = "font-size: 30x; margin-top: 3px; text-align: center; cursor: pointer;";
  node.appendChild(textnode);
  node.appendChild(removeButton).innerHTML = "Del";
  node.onclick = doneList;
  removeButton.onclick = removeList;
  document.getElementById("myList").appendChild(node);
  document.getElementById("inputForm").value = null;
}

function removeList() {
  this.parentElement.remove(this);
}

function doneList() {
  if (this.style.textDecoration == "line-through") {
    this.style.textDecoration = "none";
  } else {
    this.style.textDecoration = "line-through";
  }
}

function removeAll() {
  document.getElementById("myList").innerHTML = "";
}

function enterkey() {
  if (window.event.keyCode == 13) {
    addList();
  }
}
