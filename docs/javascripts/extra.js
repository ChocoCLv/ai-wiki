// 手机端: 记住导航展开状态
(function() {
  var nav = document.querySelector('.md-sidebar--primary');
  if (nav) {
    var key = 'wiki-nav-state';
    // 加载记住的状态
    try {
      var saved = sessionStorage.getItem(key);
      if (saved === 'open' && window.innerWidth <= 768) {
        nav.classList.add('md-sidebar--open');
      }
    } catch(e) {}
  }
})();

// 深色模式实时切换后的字体修正
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.body.style.webkitTextSizeAdjust = '100%';
  }, 100);
});
