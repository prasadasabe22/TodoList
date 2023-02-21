const todo_input = document.querySelector(".add_todo input");
const input_button = document.querySelector(".add_todo button");
const todo_list = document.querySelector(".todo_list");


showList();

input_button.addEventListener("click", () => {
  let getLocalStorage = localStorage.getItem("to do");
  let input_value = todo_input.value;
  if (getLocalStorage == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }

  if (input_value == '') {
    alert('Can not add an empty task !');
  }else{
    listArray.unshift(input_value);
    //console.log(listArray)
    //listArray.reverse();
    localStorage.setItem("to do", JSON.stringify(listArray));
    todo_input.value = "";
  }

  
  showList();
});

function showList() {
  let getLocalStorage = localStorage.getItem("to do");

  if (getLocalStorage == null || JSON.parse(getLocalStorage)=="") {
    listArray = ["Your Tasks will be displayed here"];
    
  } else {
    listArray = JSON.parse(getLocalStorage);
  }

  //console.log(getLocalStorage);
  //listArray.reverse();
  let listItem = "";
  listArray.forEach((element, index) => {
    listItem += `<li><span>${element}</span><action><span class="material-symbols-outlined" onclick="editTask(${index})">
    edit
    </span><span class="material-symbols-outlined" onclick="deleteTask(${index})">
    delete
    </span></action></li>`;
  });
  todo_list.innerHTML = listItem;
}

//delete function

function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("to do");
  listArray1 = JSON.parse(getLocalStorage);
  //listArray1.reverse();
  listArray1.splice(index, 1);
  localStorage.setItem("to do", JSON.stringify(listArray1));
  showList();
}

function editTask(index) {
  let getLocalStorage = localStorage.getItem("to do");
  listArray2 = JSON.parse(getLocalStorage);

  let edit_value = listArray2.slice(index, index + 1);

  let new_value = prompt("please enter new value !", edit_value[0]);
  if (new_value == null || new_value == "") {
    text = "User cancelled the prompt.";
  } else {
    text = new_value;
    //listArray1.splice(index,index, text);
    console.log(text);
    listArray2[index] = text;
    localStorage.setItem("to do", JSON.stringify(listArray2));
    showList();
  }
  //console.log(todo_input.value);
}


