// Date and time 

function updateDateTime() {
    const dateTime = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = dateTime.toLocaleDateString();
    let time = dateTime.toLocaleTimeString();
    let day = days[dateTime.getDay()];
    document.getElementById("date-time").innerHTML = `${day}, ${date} - ${time}`;
}
updateDateTime(); //
setInterval(updateDateTime, 1000);

// theme change
document.getElementById('theme-color').addEventListener('click', function () {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
})

//  blogs 
document.getElementById('discover').addEventListener('click', function () {
    window.location.href = "faq.html";

})

// buttons
let totalTasks = 23;
let leftTasks = 6;

function completeTask(taskId) {
    if (leftTasks > 0 && totalTasks > 0) {
        leftTasks--;
        document.getElementById("leftTasks").textContent = leftTasks;
        document.getElementById("totalTasks").textContent = totalTasks;
        totalTasks++;
        alert(`Board Update successfully! `);

        let now = new Date();
        let formattedDateTime = now.toLocaleString();

        let commentList = document.getElementById("commentsList");
        let newComment = document.createElement("li");
        newComment.textContent = `You have completlet Task ${taskId} at: (${formattedDateTime})`;
        commentList.appendChild(newComment);


        let taskButton = document.getElementById(`task-${taskId}`);
        taskButton.disabled = true;
        taskButton.textContent = `Completed  `;
        taskButton.style.backgroundColor = "gray";

        if (leftTasks === 0) {
            alert("Congrats !!! You have completed all the current task ");
        }

    } else {
        alert("Congrats !!! You have completed all the current task ");
    }
}

for (let i = 1; i <= 6; i++) {
    document.getElementById(`task-${i}`).addEventListener("click", function () {
        completeTask(i);
    });
}



document.getElementById("clear-history").addEventListener("click", function () {
    let commentList = document.getElementById("commentsList");
    commentList.innerHTML = ""; 
});