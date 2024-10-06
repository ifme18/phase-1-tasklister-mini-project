document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Listen for form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    // Get the task description input value
    const newTaskDescription = document.getElementById("new-task-description").value;

    // Create a new list item for the task
    const newTask = document.createElement("li");

    // Add the task description to the list item
    newTask.innerText = newTaskDescription;

    // Create the Edit button
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.style.marginLeft = "10px"; // Add some space between task and button

    // Add the edit functionality
    editButton.addEventListener("click", () => {
      const editedTask = prompt("Edit your task:", newTask.innerText);
      if (editedTask !== null && editedTask.trim() !== "") {
        newTask.innerText = editedTask;
        newTask.appendChild(editButton); // Reattach the Edit button after editing
      }
    });

    // Add the edit button to the task
    newTask.appendChild(editButton);

    // Add the task to the list
    taskList.appendChild(newTask);

    // Clear the input field after submitting
    form.reset();
  });
});

