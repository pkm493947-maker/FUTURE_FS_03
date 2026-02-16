document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;

  if (name === "" || phone === "" || order === "") {
    alert("Please fill all details!");
  } else {
    alert("Order placed successfully! We will contact you soon 😊");
    document.getElementById("orderForm").reset();
  }
});
