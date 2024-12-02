export function fadeIn(element, duration = 500) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    setTimeout(() => {
      element.style.opacity = 1;
    }, 10);
  }
  
  export function fadeOut(element, duration = 500) {
    element.style.opacity = 1;
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.opacity = 0;
  }
  
  export function slideIn(element, direction = 'left', duration = 500) {
    const start = direction === 'left' ? -20 : 20;
    element.style.transform = `translateX(${start}px)`;
    element.style.opacity = 0;
    element.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
    requestAnimationFrame(() => {
      element.style.transform = 'translateX(0)';
      element.style.opacity = 1;
    });
  }
  
  export function pulse(element, scale = 1.05, duration = 500) {
    element.style.transform = 'scale(1)';
    element.style.transition = `transform ${duration}ms ease-in-out`;
    setTimeout(() => {
      element.style.transform = `scale(${scale})`;
      setTimeout(() => {
        element.style.transform = 'scale(1)';
      }, duration);
    }, 10);
  }
  
  
  
  