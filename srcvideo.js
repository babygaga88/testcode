const video = '<iframe width="280" height="115" src="https://www.youtube.com/embed/vcKjnKklvQk?si=jGVwMj5DshC-SpP5&amp;controls=0?&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
const elscreen = document.createElement('div');
elscreen.style.cssText = 'position: fixed;top: 70%;left: 0;width: 10%;height: 30px;background: rgba(30, 144, 255);z-index: 99999;display: flex;justify-content: center;align-items: center;font-size: 11pt;font-weight:bold;color: white;text-transform: uppercase;padding:2px;'; 
elscreen.innerHTML = video; 
document.body.appendChild(elscreen);
