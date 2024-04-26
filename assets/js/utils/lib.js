export default {
  getMousePos:(event,canvas)=>{
    const rect = canvas.getBoundingClientRect();

    return {
      posX: event.clientX - rect.left,
      posY: event.clientY - rect.top,
    }
  }
}