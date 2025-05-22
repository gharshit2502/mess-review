const scriptURL = 'https://script.google.com/macros/s/AKfycbwQJgf1uJLuM3tECzvpwgABVVxjZNHUxzComnkQptAvnRBRa0NOsrvEvHNUfB8xtuG0ew/exec';

const form = document.getElementById('reviewForm');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      status.textContent = "✅ Review Submitted!";
      form.reset();
    } else {
      throw new Error("Network response was not ok.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    status.textContent = "⚠️ Submission failed.";
  });
});
