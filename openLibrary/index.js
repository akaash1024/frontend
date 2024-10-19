(()=>{
    let toggleButtons = document.querySelectorAll('.site-header__toggle-sidebar, .sidebar__toggle-sidebar');
  
    function toggleSidebar(e){
      document.body.classList.toggle('sidebar-open');
      document.getElementById('sidebar').classList.toggle('active');
      document.getElementById('sidebar-overlay').classList.toggle('overlay--show');
    }
  
    toggleButtons.forEach(function (toggleButton) {
      toggleButton.addEventListener('click', toggleSidebar)
    })
  })();