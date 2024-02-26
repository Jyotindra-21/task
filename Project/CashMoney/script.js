// notes array
var notes = [ 2000,500, 200, 100, 50, 20, 10];
var notesImg = [
  "https://paisaboltahai.rbi.org.in/images/2000-note-front.png",
  "https://paisaboltahai.rbi.org.in/images/500-note-front.png",
  "https://paisaboltahai.rbi.org.in/images/Rs200/200-note-front.png",
  "https://paisaboltahai.rbi.org.in/images/Rs100/100-note-front-old.png",
  "https://paisaboltahai.rbi.org.in/images/Rs50/50-note-front.png",
  "https://paisaboltahai.rbi.org.in/images/Rs20/20-note-front.png",
  "https://paisaboltahai.rbi.org.in/images/Rs10/10-note-front.png",
];
// for loop for structure print of html
for (let i = 0; i < notes.length; i++) {
  document.getElementById("tbody").innerHTML += `
  <tr>
  <td style="background-image: url(${notesImg[i]});">${notes[i]}</td>
  <td><input onkeyup="count()" type="number" placeholder="Number of Notes" id="note-${i}"></td>
  <td><h2 id="result-${i}">0</h2></td>
  </tr>`;
}
// count function run when keyup on input
function count() {
  let total = 0;
  let totalNotes = 0;

  for (let j = 0; j < notes.length; j++) {
    const counting = +document.getElementById(`note-${j}`).value;
    const answer = notes[j] * counting;

    counting != 0 ? (totalNotes = +counting + totalNotes) : 0;
    answer != 0 ? (total = answer + total) : 0;
    //   totalNotes += counting || 0;
    //   total += answer || 0;

    document.getElementById(`result-${j}`).innerHTML = answer;
  }
  // after loop finish total print
  document.getElementById("total").innerHTML = total;
  document.getElementById("total-notes").innerHTML = totalNotes;
  document.getElementById("total-inword").innerHTML = numberToWord(total);
}

function resetForm() {
  for (let j = 0; j < notes.length; j++) {
    document.getElementById(`result-${j}`).innerHTML = 0;
  }
  document.getElementById("total").innerHTML = 0;
  document.getElementById("total-notes").innerHTML = 0;
  document.getElementById("total-inword").innerHTML = "zero.";
}
