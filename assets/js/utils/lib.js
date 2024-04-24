export default {
  getMousePos:(event)=>{
    const rect = event.target.getBoundingClientRect();

    return {
      posX: event.clientX - rect.left,
      posY: event.clientY - rect.top,
    }
  }
}