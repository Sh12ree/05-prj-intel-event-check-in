// ====== STATE ======
let totalAttendance = 0;

let teams = {
  "Team Water Wise": 0,
  "Team Net Zero": 0,
  "Team Renewables": 0
};

// ====== DOM ELEMENTS ======
const nameInput = document.getElementById("nameInput");
const teamSelect = document.getElementById("teamSelect");
const checkInBtn = document.getElementById("checkInBtn");

const attendanceCount = document.getElementById("attendanceCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

const waterWiseCount = document.getElementById("waterWiseCount");
const netZeroCount = document.getElementById("netZeroCount");
const renewablesCount = document.getElementById("renewablesCount");

// goal for progress bar
const GOAL = 50;

// ====== CHECK-IN FUNCTION ======
checkInBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const team = teamSelect.value;

  if (name === "" || team === "") {
    alert("Please enter a name and select a team.");
    return;
  }

  // update total attendance
  totalAttendance++;

  // update team count
  teams[team]++;

  // greeting message
  greeting.textContent = `🎉 Welcome, ${name} from ${team}!`;

  // update UI
  updateDisplay();

  // clear input
  nameInput.value = "";

  // optional celebration
  if (totalAttendance === GOAL) {
    alert("🎉 Goal reached! Great turnout!");
  }
});

// ====== UPDATE UI FUNCTION ======
function updateDisplay() {
  // total attendance
  attendanceCount.textContent = totalAttendance;

  // team counts
  waterWiseCount.textContent = teams["Team Water Wise"];
  netZeroCount.textContent = teams["Team Net Zero"];
  renewablesCount.textContent = teams["Team Renewables"];

  // progress bar
  let percent = (totalAttendance / GOAL) * 100;
  if (percent > 100) percent = 100;

  progressBar.style.width = percent + "%";
}