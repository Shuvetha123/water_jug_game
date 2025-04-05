const backendUrl = "http://127.0.0.1:5000";

async function startGame() {
    const jugA = document.getElementById("jugA").value;
    const jugB = document.getElementById("jugB").value;
    const goalA = document.getElementById("goalA").value;
    const goalB = document.getElementById("goalB").value;

    const response = await fetch(`${backendUrl}/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jugA, jugB, goalA, goalB })
    });

    const data = await response.json();
    alert(data.message);
}

async function performAction(action) {
    const response = await fetch(`${backendUrl}/action`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action })
    });

    const data = await response.json();
    document.getElementById("jugAStatus").innerText = data.jugA;
    document.getElementById("jugBStatus").innerText = data.jugB;

    if (data.goalAchieved) {
        alert("Congratulations! You achieved the goal.");
    }
}