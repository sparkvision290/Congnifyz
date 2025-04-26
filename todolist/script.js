function addTask() {
    const title = document.getElementById("taskInput").value.trim();
    const date = document.getElementById("taskDate").value;
    const time = document.getElementById("taskTime").value;
    const category = document.getElementById("taskCategory").value;
  
    if (title === "") return alert("Please enter a task title!");
  
    const taskList = document.getElementById("taskList");
  
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
  
    taskCard.innerHTML = `
      <div class="task-details">
        <h3>${title}</h3>
        <p class="task-meta">📅 ${date || 'No date'} ⏰ ${time || 'No time'}</p>
        <span class="category">${category}</span>
      </div>
      <input type="checkbox" onchange="toggleComplete(this)">
    `;
  
    taskList.appendChild(taskCard);
    saveTasks();
  
    // Clear inputs
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskTime").value = "";
  }
  
  function toggleComplete(checkbox) {
    const card = checkbox.parentElement;
    if (checkbox.checked) {
      card.style.opacity = "0.5";
      card.style.textDecoration = "line-through";
    } else {
      card.style.opacity = "1";
      card.style.textDecoration = "none";
    }
    saveTasks();
  }
  
  function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
  }
  
  function loadTasks() {
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
  }
  
  window.onload = loadTasks;