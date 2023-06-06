document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("jokes-container");
  
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomJoke = data[randomIndex];
        const { setup, punchline } = randomJoke; // Destructure setup and punchline properties
  
        const jokeObject = {
          setup: setup,
          punchline: punchline
        };
        const jsonJoke = JSON.stringify(jokeObject, null, 2); // Convert to formatted JSON string
  
        const jokeElement = document.createElement("pre");
        jokeElement.textContent = jsonJoke;
  
        container.appendChild(jokeElement);
      })
      .catch(error => {
        console.log("Error fetching jokes:", error);
      });
  });
  
