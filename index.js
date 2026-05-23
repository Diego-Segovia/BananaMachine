document.addEventListener("DOMContentLoaded", () => {
  const actionBtn = document.getElementById("actionBtn");
  const currentKLevelElement = document.getElementById("currentK+Level");
  const firstKLevelElement = document.getElementById("1stK+Level");
  const secondKLevelElement = document.getElementById("2ndK+Level");
  const thirdKLevelElement = document.getElementById("3rdK+Level");
  const feedbackArea = document.getElementById("feedbackArea");
  const feedbackAreaPlaceholder = document.getElementById(
    "feedbackAreaPlaceholder",
  );
  const bathAmount = document.getElementById("bathAmountId");
  const dialysisFrequencyResult = document.getElementById(
    "dialysisFrequencyResult",
  );

  actionBtn.addEventListener("click", () => {
    const currentKLevel = currentKLevelElement.value;
    const firstKLevel = firstKLevelElement.value;
    const secondKLevel = secondKLevelElement.value;
    const thirdKLevel = thirdKLevelElement.value;

    if (!currentKLevel) {
      feedbackAreaPlaceholder.textContent = "Please enter a valid number.";
      feedbackAreaPlaceholder.classList.add("text-danger");
      feedbackAreaPlaceholder.classList.remove("text-body-secondary");
      return;
    }

    feedbackAreaPlaceholder.classList.remove("text-danger");
    feedbackAreaPlaceholder.classList.add("text-body-secondary");

    feedbackAreaPlaceholder.classList.add("d-none");
    feedbackArea.classList.remove("d-none");
    dialysisFrequencyResult.classList.remove("d-none");

    if (firstKLevel == 2 && secondKLevel == 2 && thirdKLevel == 2) {
      dialysisFrequencyResult.textContent = "Patient can come off weekly labs.";
    } else {
      dialysisFrequencyResult.textContent = "Patient will be on weekly labs.";
    }

    if (currentKLevel >= 6) {
      bathAmount.textContent = "1.0 K+";
      return;
    }

    if (currentKLevel < 6 && currentKLevel > 4) {
      bathAmount.textContent = "2.0 K+";
      return;
    }

    if (currentKLevel <= 4) {
      bathAmount.textContent = "3.0 K+";
      return;
    }
  });
});
