const inp = document.getElementById("task");
const btn = document.getElementById("add");
const list = document.getElementById("tasks");

        btn.addEventListener("click", () => {
            const taskText = inp.value.trim();
            if (taskText !== "" && taskText.length <= 16) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <span class="task-text">${taskText}</span>
                    <div class="task-container">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
                `;
                list.appendChild(listItem);
                inp.value = "";

                const editButton = listItem.querySelector(".edit");
                const deleteButton = listItem.querySelector(".delete");
                const taskTextSpan = listItem.querySelector(".task-text");

                editButton.addEventListener("click", () => {
                    const editInput = document.createElement("input");
                    editInput.type = "text";
                    editInput.placeholder = "Change data ...";
                    editInput.value = taskTextSpan.textContent;
                    editInput.className = "edit-input";
                    taskTextSpan.replaceWith(editInput);

                    const saveButton = document.createElement("button");
                    saveButton.textContent = "Save";
                    saveButton.className = "save";
                    listItem.querySelector(".task-container").appendChild(saveButton);

                    editButton.style.display = "none";

                    saveButton.addEventListener("click", () => {
                        const updatedTaskText = editInput.value.trim();
                        if (updatedTaskText !== "") {
                            taskTextSpan.textContent = updatedTaskText;
                        }
                        editInput.replaceWith(taskTextSpan);
                        saveButton.remove();
                        editButton.style.display = "inline";
                    });
                });

                deleteButton.addEventListener("click", () => {
                    list.removeChild(listItem);
                });
            }
            else{
                alert("Malumot kiritganingizga va u 16ta belgidan oshmaganiga ishonch hosil qiling!!");
            }
        });

        inp.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                btn.click();
            }
        });