export function initSidebar() {
  const toggle = document.querySelector('.toggle_side_bar');
  const closeBtn = document.querySelector('#side_bar .closebtn');
  const sidebar = document.getElementById('side_bar');

  if (!sidebar) return;

  function openNav() {
    sidebar.style.width = '300px';
  }

  function closeNav() {
    sidebar.style.width = '0';
  }

  if (toggle) {
    toggle.onclick = openNav;
  }

  if (closeBtn) {
    closeBtn.onclick = closeNav;
  }
}
