//button
const addTaskButton = document.getElementById("addTask");
//input
const task = document.getElementById("taskInput");
//list
const taskListOl = document.getElementById("taskList");
addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskName = task.value.trim();
  if (taskName) {
    const li = document.createElement("li");
    const buttonDone = document.createElement("button");
    li.innerHTML = `<span>${taskName}</span>`;

    buttonDone.innerHTML = "Done";
    li.appendChild(buttonDone);
    taskListOl.append(li);

    buttonDone.addEventListener("click", crossTask);
    //buttonDone.classList.add("done");
    let done = true;
    buttonDone.classList.add("done");

    function crossTask() {
        li.classList.add("cross-li");

      if (done) {
        li.classList.replace("uncross-li", "cross-li");
        buttonDone.classList.replace("un-done","done");
        done = false;

      } else {
        li.classList.replace('cross-li',"uncross-li");
        buttonDone.classList.add('done',"un-done");
        done = true;
    
      }
 }

  }
}


      //li.style.textDecoration = "line-through"

      //         if (li.style.textDecoration === "line-through"){
      //     li.style.textDecoration = "none"
      // }
      //     else

      //     {li.style.textDecoration == "line-through"};

      /* buttonDone.style.color = 'red';
    buttonDone.style.marginLeft = '20px';
    buttonDone.style.marginTop = '5px'; */
   


/*
Дописать реализацию приложения TodoList: 
добавить кнопку, которая перечёркивает дело (делает его сделанным);
(Advanced ***)


в проекте ToDO List сделать так, что бы кнопка "Done" после отметки задачи как 
выполненной, меняла свое название и назначение. Нажатие на кнопку должно возвращать задачу в работу.
*/
