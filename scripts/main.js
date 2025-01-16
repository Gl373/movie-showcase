function fixaknappar() {
  var buttons = document.querySelectorAll('button.lasmerknapp');
  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          var filmSektion = button.parentElement;
          var slutstrang = '';
        
          for (var i = 0; i != filmSektion.children.length - 2; i += 1) {
            var filmDel = filmSektion.children[i]
            if (filmDel.tagName != 'BUTTON')
              slutstrang += filmDel.innerText + '\n';
          }
        
          alert(slutstrang);
      });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fixaknappar);
} else {
  fixaknappar();
}
