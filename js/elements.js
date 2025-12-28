gsap.registerPlugin(ScrollTrigger);

// анімацію після завантаження сторінки
window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".elem", {
    y: -50, // Вилітають зверху
    opacity: 0,
    duration: 0.8, // Тривалість 0.8с
    stagger: 0.2, // Затримка між кожною іконкою 0.2с (ефект "драбинки")
    ease: "back.out(1.7)",
  });

  // Анімація для самого калькулятора
  gsap.from("#calculator", {
    x: -200, // Виїжджає зліва
    opacity: 0,
    duration: 1,
    delay: 0.5, // Починає рух через 0.5с після старту
    ease: "power3.out",
  });
});
