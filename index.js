function addList() {
  const toDoForm = document.querySelector(".toDoForm");
  const toDoInput = toDoForm.querySelector("input").value;
  const node = document.createElement("li");
  const removeButton = document.createElement("button");
  const textnode = document.createTextNode(toDoInput);
  removeButton.className = "btn btn-warning";
  removeButton.style.cssText =
    "font-size: 10px; font-weight: 900; margin-top: -1px; margin-left: 5px; padding: 5px";
  node.style.cssText =
    "font-family: 'Noto Serif KR', serif; font-size: 20px; margin-top: 3px; text-align: left; cursor: pointer;";
  node.appendChild(textnode);
  node.appendChild(removeButton).innerHTML = "삭제";
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
  if (confirm("전부 지울까요?")) {
    document.getElementById("myList").innerHTML = "";
  } else {
    // Do nothing!
  }
}

function enterkey() {
  if (window.event.keyCode == 13) {
    addList();
  }
}
