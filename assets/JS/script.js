clickYes = function() {
    alert("Biết thế nào cũng chọn có mà =)))");
};

clickNo = function() {
   var btn = document.getElementById('btn-no');
   var top = Math.floor(Math.random()*800);
   var left = Math.floor(Math.random()*400+600);
   btn.style.top = top + 'px';
   btn.style.left = left + 'px';
};