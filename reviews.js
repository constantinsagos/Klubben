function loadReviews() {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Sort by average (highest first)
  reviews.sort((a, b) => b.average - a.average);

  const table = document.getElementById("reviewsTable");
  table.innerHTML = ""; // Clear table before repopulating

  reviews.forEach((r) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${r.movie}</td>
      <td>${r.cat1}</td>
      <td>${r.cat2}</td>
      <td>${r.cat3}</td>
      <td>${r.cat4}</td>
      <td>${r.cat5}</td>
      <td><b>${r.average}</b></td>
      <td><button data-movie="${r.movie}" onclick="deleteReview(this)">Delete</button></td>
    `;
    table.appendChild(row);
  });
}

function deleteReview(button) {
  const movieName = button.getAttribute("data-movie");
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Remove the first matching movie
  reviews = reviews.filter(r => r.movie !== movieName);

  localStorage.setItem("reviews", JSON.stringify(reviews));
  loadReviews(); // Refresh table
}

// Load reviews when page opens
loadReviews();
