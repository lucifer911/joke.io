
<!DOCTYPE html>
<html>
<head>
  <title>GitHub Page - Display Raw JSON</title>
</head>
<body>
  <div id="jokes-container"></div>

  <script>
    // Fetch the JSON data
    fetch('your-json-url')
      .then(response => response.json())
      .then(jsonData => {
        // Convert the JSON object to a string and insert it into the div
        document.getElementById('jokes-container').innerText = JSON.stringify(jsonData, null, 2);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
      });
  </script>
</body>
</html>

