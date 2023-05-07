export function resizer(e) {
  
    const leftPane=document.querySelector('#left-toolbar-container')
    const rightPane=document.querySelector('#right-toolbar-container')
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);
    let prevX = e.x;
    let target=e.target;
    const leftPanel =leftPane.getBoundingClientRect();
    const rightPanel =rightPane.getBoundingClientRect();
    function mousemove(e) {
      let newX =  prevX - e.x;
      if(target.id.includes('left')){
        leftPane.style.width = leftPanel.width - newX + "px";
      }
      else if(target.id.includes('right')){
        rightPane.style.width = rightPanel.width - newX + "px";
      }
      
      
    }
    
    function mouseup() {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);
      
    }  
  
  }
  
