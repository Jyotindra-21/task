// notes array
const notesObj = {
  2000: "https://paisaboltahai.rbi.org.in/images/2000-note-front.png",
  500: "https://paisaboltahai.rbi.org.in/images/500-note-front.png",
  200: "https://paisaboltahai.rbi.org.in/images/Rs200/200-note-front.png",
  100: "https://paisaboltahai.rbi.org.in/images/Rs100/100-note-front-old.png",
  50: "https://paisaboltahai.rbi.org.in/images/Rs50/50-note-front.png",
  20: "https://paisaboltahai.rbi.org.in/images/Rs20/20-note-front.png",
  10: "https://paisaboltahai.rbi.org.in/images/Rs10/10-note-front.png",
};
const tmoney = document.querySelector("#total");
const tNotes = document.querySelector("#total-notes");
const inword = document.querySelector("#total-inword");

for (const [key, value] of Object.entries(notesObj)) {
  const tbody = document.getElementById("tbody");
  const tr = `
  <tr>
  <td style="background-image: url(${value});">${key}</td>
  <td><input onkeyup="count()" type="number" placeholder="Number of Notes" id="note-${key}"></td>
  <td><h2 id="result-${key}">0</h2></td>
  </tr>`;
  tbody.insertAdjacentHTML("beforeend", tr);
}
// count function run when keyup on input
function count() {
  let total = 0;
  let totalNotes = 0;
  for (const [key, value] of Object.entries(notesObj)) {
    const counting = +document.getElementById(`note-${key}`).value;
    const answer = key * counting;
    counting != 0 
    ? (totalNotes = +counting + totalNotes) : 0;
    answer != 0 ? (total = answer + total) : 0;
    document.getElementById(`result-${key}`).innerHTML = answer;
  }
  // after loop finish total print
  tmoney.innerHTML = total;
  tNotes.innerHTML = totalNotes;
  inword.innerHTML = numberToWord(total);
}

function resetForm() {
  for (const [key, value] of Object.entries(notesObj)) {
    document.getElementById(`result-${key}`).innerHTML = 0;
  }
  tmoney.innerHTML = 0;
  tNotes.innerHTML = 0;
  inword.innerHTML = "zero.";
}
