document.getElementById('accessForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const matrix = document.getElementById('matrix').value.trim();

  fetch('folders.json')
    .then(response => response.json())
    .then(data => {
      if (data[matrix]) {
        document.getElementById('result').innerHTML = `
          ✅ Folder found! <br>
          <a href="${data[matrix]}" target="_blank">Open Your Folder</a>
        `;
      } else {
        document.getElementById('result').innerHTML = `
          ❌ Matrix number not found. Please check and try again.
        `;
      }
    })
    .catch(error => {
      document.getElementById('result').textContent = "Error loading folder data.";
      console.error(error);
    });
});
