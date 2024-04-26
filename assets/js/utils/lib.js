export default {
  getMousePos:(event,canvas)=>{
    const rect = canvas.getBoundingClientRect();

    return {
      posX: event.clientX - rect.x,
      posY: event.clientY - rect.y,
    }
  }
}