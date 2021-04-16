const toggleMode = document.querySelector('#js-toggle');

if (localStorage.getItem('theme')) {
   setColorScheme(localStorage.getItem('theme'));
} else if (localStorage.getItem('theme') !== 'light' && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
   setColorScheme('dark');
}

toggleMode.addEventListener('change', function(e) {
   // debug making sure the input event listener is attached
   // console.log(e.target)
   if (e.target.checked) {
      // debug
      // console.log('checked');
      // document.body.dataset.theme = 'dark';
      setColorScheme('dark');
      
   } else {
      // document.body.dataset.theme = 'light';
      // debug
      // console.log('not checked');
      setColorScheme('light');
   }
});

function setColorScheme(theme) {
   // debug
   if (theme === 'dark') {
      // debug
      // console.log('🎉 Dark mode is supported');
      toggleMode.checked = true;
      document.body.dataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
   } else {
      // debug
      // console.log('setting', theme);
      document.body.dataset.theme = 'light';
      localStorage.setItem('theme', theme);
   }

}