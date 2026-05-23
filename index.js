document.addEventListener("DOMContentLoaded", () => {
  // Grab DOM elements
  const actionBtn = document.getElementById("actionBtn");
  const dataInput = document.getElementById("dataInput");
  const feedbackArea = document.getElementById("feedbackArea");

  // Attach click event listener to the button
  actionBtn.addEventListener("click", () => {
    const inputValue = dataInput.value;

    // Basic validation check
    if (!inputValue) {
      feedbackArea.textContent = "Please enter a valid number.";
      feedbackArea.classList.add("text-danger");
      feedbackArea.classList.remove("text-body-secondary");
      return;
    }

    // Reset styling on success and display the value
    feedbackArea.classList.remove("text-danger");
    feedbackArea.classList.add("text-body-secondary");
    feedbackArea.textContent = `Successfully captured: ${inputValue}`;

    // Log to console for debugging
    console.log(`Algorithm triggered with value: ${inputValue}`);

    // TODO: Wire up your algorithm logic here
  });
});
