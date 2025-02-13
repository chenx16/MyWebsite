document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const dateRadio = document.getElementById("date-radio");
    const timeRadio = document.getElementById("time-radio");
    const dateTimeButton = document.getElementById("date-time-button");
    const dateTimeOutput = document.getElementById("date-time-output");
  
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      themeToggleButton.textContent = "Light Mode";
    }
  
    themeToggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");
      themeToggleButton.textContent = isDark ? "Light Mode" : "Dark Mode";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  
    dateTimeButton.addEventListener("click", () => {
      const now = new Date();
      if (dateRadio.checked) {
        dateTimeOutput.textContent = now.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' });
      } else if (timeRadio.checked) {
        dateTimeOutput.textContent = now.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      }
    });
  });
  