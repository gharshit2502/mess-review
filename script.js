const scriptURL = 'https://script.google.com/macros/s/AKfycbwQJgf1uJLuM3tECzvpwgABVVxjZNHUxzComnkQptAvnRBRa0NOsrvEvHNUfB8xtuG0ew/exec';

document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(() => {
    document.getElementById('status').textContent = '✅ Review Submitted!';
    form.reset();
  })
  .catch(error => {
    console.error('Error!', error.message);
    document.getElementById('status').textContent = '⚠️ Submission failed.';
  });
});
