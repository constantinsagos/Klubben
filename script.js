document.getElementById("reviewForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const movie = document.getElementById("movieName").value;
  const cat1 = parseInt(document.getElementById("cat1").value);
  const cat2 = parseInt(document.getElementById("cat2").value);
  const cat3 = parseInt(document.getElementById("cat3").value);
  const cat4 = parseInt(document.getElementById("cat4").value);
  const cat5 = parseInt(document.getElementById("cat5").value);

  const average = ((cat1 + cat2 + cat3 + cat4 + cat5) / 5).toFixed(1);

  const review = {
    movie,
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    average
  };

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  alert("Review saved!");
  document.getElementById("reviewForm").reset();
});