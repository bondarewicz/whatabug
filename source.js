// http://keycode.info
var map = {70: false, 73: false, 88: false, 77: false, 69: false, 72: false, 78: false, 84: false};

function KeyPress(e) {
      
    var evtobj = window.event? event : e
    if (e.keyCode in map) {
      map[e.keyCode] = true;
      
      // fixme
      if (map[70] && map[73] && map[88] && map[77] && map[69]) {
          document.body.innerHTML = '<p>check the console <span>&#x2588;</span></p>';
          console.log('SSB3b3VsZCBsaWtlIHRvIGdpdmUgbXkgc2luY2VyZXN0IHRoYW5rcyBmb3IgeW91ciBpbnRlcmVzdCBpbiB3aGF0YWJ1Zy5jb20sIGlmIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiBjb250cmlidXRpbmcgYW5kIHNoYXBpbmcgdGhpcyB3ZWJzaXRlIHR5cGUgImhpbnQiIGZvciBmb3IgZmluYWwgaGludA=='); 
      }
      
      // hint
      if(map[72] && map[73] && map[78] && map[84]) {
        document.body.innerHTML = '<p><a href="https://goo.gl/gAVnEr">click me<a> <span>&#x2588;</span></p>';
        console.clear();
      }
  }
}

function reset(e) {
  console.log(e.keyCode)
  if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
}

document.addEventListener("keydown", KeyPress);