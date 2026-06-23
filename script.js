let totalAttendance = 0;
const GOAL = 50;

let teams = {
  "Team Water Wise": 0,
  "Team Net Zero": 0,
  "Team Renewables": 0
};

// DOM elements
const nameInput = document.getElementById("nameInput");
const teamSelect = document.getElementById("teamSelect");
const checkInBtn = document.getElementById("checkInBtn");

const attendanceCount = document.getElementById("attendanceCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

const waterWiseCount = document.getElementById("waterWiseCount");
const netZeroCount = document.getElementById("netZeroCount");
const renewablesCount = document.getElementById("renewablesCount");

// Click event
checkInBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const team = teamSelect.value;

  if (!name || !team) {
    alert("Please enter name and select a team!");
    return;
  }

  // update data
  totalAttendance++;
  teams[team]++;

  // greeting
  greeting.textContent = `Welcome, ${name} from ${team}! 🎉`;

  // update UI
  updateUI();

  // clear input
  nameInput.value = "";

  // celebration
  if (totalAttendance === GOAL) {
    alert("🎉 Attendance goal reached!");
  }
});

// update function
function updateUI() {
  attendanceCount.textContent = totalAttendance;

  waterWiseCount.textContent = teams["Team Water Wise"];
  netZeroCount.textContent = teams["Team Net Zero"];
  renewablesCount.textContent = teams["Team Renewables"];

  let percent = (totalAttendance / GOAL) * 100;
  if (percent > 100) percent = 100;

  progressBar.style.width = percent + "%";
}