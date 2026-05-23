document.addEventListener("DOMContentLoaded", () => {
  const actionBtn = document.getElementById("actionBtn");
  const dataInput = document.getElementById("dataInput");
  const feedbackArea = document.getElementById("feedbackArea");
  const feedbackAreaPlaceholder = document.getElementById(
    "feedbackAreaPlaceholder",
  );
  const bathAmount = document.getElementById("bathAmountId");

  actionBtn.addEventListener("click", () => {
    const inputValue = dataInput.value;

    if (!inputValue) {
      feedbackAreaPlaceholder.textContent = "Please enter a valid number.";
      feedbackAreaPlaceholder.classList.add("text-danger");
      feedbackAreaPlaceholder.classList.remove("text-body-secondary");
      return;
    }

    feedbackAreaPlaceholder.classList.remove("text-danger");
    feedbackAreaPlaceholder.classList.add("text-body-secondary");

    feedbackAreaPlaceholder.classList.add("d-none");
    feedbackArea.classList.remove("d-none");

    if (inputValue >= 6) {
      bathAmount.textContent = "1.0 K+";
      return;
    }

    if (inputValue < 6 && inputValue > 4) {
      bathAmount.textContent = "2.0 K+";
      return;
    }

    if (inputValue <= 4) {
      bathAmount.textContent = "3.0 K+";
      return;
    }
  });
});
