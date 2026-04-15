let number = 1000000;
let isRunning = false;

function formatNumber(num) {
  return num.toLocaleString("id-ID");
}

function updateJackpot() {
  const el = document.getElementById("jackpot-number");
  if (!el || isRunning) return;

  isRunning = true;

  const start = number;
  const target = number + Math.floor(Math.random() * 5000 + 1000);
  const duration = 1000; // 1 detik animasi
  const startTime = performance.now();

  function animate(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    // easing biar smooth (ease-out)
    const ease = 1 - Math.pow(1 - progress, 3);

    number = Math.floor(start + (target - start) * ease);
    el.innerText = formatNumber(number);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      number = target;
      el.innerText = formatNumber(number);
      isRunning = false;
    }
  }

  requestAnimationFrame(animate);
}

// jalan tiap 2 detik
setInterval(updateJackpot, 2000);
