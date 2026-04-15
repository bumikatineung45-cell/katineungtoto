let number = 1000000;

function formatNumber(num) {
  return num.toLocaleString("id-ID");
}

function updateJackpot() {
  const el = document.getElementById("jackpot-number");
  if (!el) return;

  let target = number + Math.floor(Math.random() * 5000);

  let interval = setInterval(() => {
    number += Math.floor((target - number) / 10);

    el.innerText = formatNumber(number);

    if (number >= target - 10) {
      number = target;
      el.innerText = formatNumber(number);
      clearInterval(interval);
    }
  }, 50);
}

// jalan terus tiap 2 detik
setInterval(updateJackpot, 2000);