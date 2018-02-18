$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devourIt = $(this).data("devoured");
  
      var newDevoured = {
        devoured: devourIt
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          console.log("Devoured: ", devourIt);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim()
      };
  
      // Send the POST request.
      var root = window.location.origin;
      $.ajax(root + "/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });