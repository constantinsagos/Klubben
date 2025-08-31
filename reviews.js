const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
const table = document.getElementById("reviewsTable");

reviews.forEach(r => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${r.movie}</td>
    <td>${r.cat1}</td>
    <td>${r.cat2}</td>
    <td>${r.cat3}</td>
    <td>${r.cat4}</td>
    <td>${r.cat5}</td>
    <td><b>${r.average}</b></td>
  `;
  table.appendChild(row);
});