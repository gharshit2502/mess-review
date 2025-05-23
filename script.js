 const url = "https://script.google.com/macros/s/AKfycbzBQsMdD_DDpmkvzddXtt_e2r0aC7XA9i6XBRpiYnhKIxktIZIym3dfHUiYv9sv452M4A/exec";
    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      fetch(url, {
        method: "POST",
        body: data
      })
        .then((res) => res.text())
        .then((result) => {
          alert("Response submitted !");
          form.reset();
        })
        .catch((err) => alert("Error: " + err));
    });