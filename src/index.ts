// 👇️ const box: HTMLElement | null
const box = document.getElementById('box');

if (box != null) {
  // ✅ Add class
  box.classList.add('bg-yellow');

  // ✅ Remove class
  // box.classList.remove('bg-yellow');
}