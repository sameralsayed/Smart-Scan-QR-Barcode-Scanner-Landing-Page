// Set current year in footer
$(function () {
  const yearSpan = $("#year");
  const now = new Date();
  yearSpan.text(now.getFullYear());
});

// Smooth scroll for internal links
$(document).on("click", 'a[href^="#"]', function (e) {
  const targetId = $(this).attr("href");
  if (targetId.length > 1 && $(targetId).length) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(targetId).offset().top - 72
      },
      600
    );
  }
});

// Simulated scan demo
$("#demoScanBtn").on("click", function () {
  const inputVal = $("#demoInput").val().trim();
  const resultBox = $("#demoResult");

  if (!inputVal) {
    resultBox
      .text("Please enter a value to simulate a scan.")
      .removeClass("text-success")
      .addClass("text-warning");
    return;
  }

  // Simple classification for demo purposes only
  let type = "Text";
  if (/^https?:\/\//i.test(inputVal)) {
    type = "URL";
  } else if (/^\S+@\S+\.\S+$/.test(inputVal)) {
    type = "Email";
  } else if (/^WIFI:/i.test(inputVal)) {
    type = "Wi‑Fi config";
  }

  const message = `Detected type: ${type}\nValue: ${inputVal}`;
  resultBox
    .text(message)
    .removeClass("text-warning")
    .addClass("text-success");
});
