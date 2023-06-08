// Common JavaScript

// Home Page
if (document.getElementById('index')) {
    // Update the message on the home page
    var message = document.getElementById('message');
    message.textContent = 'Welcome to my website!';
  
    // Add event listener to change the message color on click
    message.addEventListener('click', function() {
      message.style.color = 'red';
    });
  }
  
  // Table Page
  if (document.getElementById('table')) {
    // Change the background color of the table rows on hover
    var tableRows = document.querySelectorAll('#myTable tr');
    tableRows.forEach(function(row) {
      row.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightgray';
      });
  
      row.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
      });
    });
  }
  
  // Form Page
  if (document.getElementById('form')) {
    // Submit form event
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission
  
      // Get form input values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
  
      // Display submitted data
      alert('Name: ' + name + '\nEmail: ' + email);
  
      // Clear form inputs
      form.reset();
    });
  }
  
  // List Page
  if (document.getElementById('list')) {
    // Add a new list item on button click
    var myList = document.getElementById('myList');
    var addItemButton = document.createElement('button');
    addItemButton.textContent = 'Add Item';
    addItemButton.addEventListener('click', function() {
      var newItem = document.createElement('li');
      newItem.textContent = 'New Item';
      myList.appendChild(newItem);
    });
  
    // Insert the button before the list
    myList.parentNode.insertBefore(addItemButton, myList);
  }  