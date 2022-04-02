// Event handler button
document.getElementById("submit").onclick = function () {
    // Button clicked
    // Read input
    let name = document.getElementById("name").value;
    // If the field have contains contents
    if (name.length > 0) {
      // Show success-alert
      document.getElementById("form-success").style.display = "block";
      // Hide danger-alert
      document.getElementById("form-error").style.display = "none";
    } else {
      // If no
      // Show danger-alert
      document.getElementById("form-error").style.display = "block";
      // Hide success-alert
      document.getElementById("form-success").style.display = "none";
    }
    // Cancel form submission
    return false;
  }
  
  