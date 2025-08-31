document.getElementById("reviewForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const movie = document.getElementById("movieName").value.trim();
  const movie = document.getElementById("genre").value.trim();
  const cat1 = parseInt(document.getElementById("cat1").value);
  const cat2 = parseInt(document.getElementById("cat2").value);
  const cat3 = parseInt(document.getElementById("cat3").value);
  const cat4 = parseInt(document.getElementById("cat4").value);
  const cat5 = parseInt(document.getElementById("cat5").value);
  const cat6 = parseInt(document.getElementById("cat6").value);

  const recommend = document.querySelector('input[name="recommend"]:checked').value;

  const average = ((cat1 + cat2 + cat3 + cat4 + cat5 + cat6) / 6).toFixed(1);

  const review = {
    movie,
    genre,
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    cat6,
    recommend,
    average
  };

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  alert("Review saved!");
  document.getElementById("reviewForm").reset();
});
