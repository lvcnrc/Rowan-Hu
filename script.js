// ===== 轻交互集中放这里，后续维护更方便 =====

// 自动年份
document.getElementById("year").textContent = new Date().getFullYear();

// 滚动进入视口时淡入
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

// 鼠标移动时让背景光晕做很轻的视差。
// 只影响装饰层，不影响内容和性能。
const ambientA = document.querySelector(".ambient-a");
const ambientB = document.querySelector(".ambient-b");

window.addEventListener(
  "pointermove",
  (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    ambientA.style.transform = `translate(${x * 24}px, ${y * 18}px)`;
    ambientB.style.transform = `translate(${x * -18}px, ${y * -24}px)`;
  },
  { passive: true }
);
