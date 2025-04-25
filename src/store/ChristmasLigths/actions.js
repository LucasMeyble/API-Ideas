const actions = {
  toggleRunning() {
    this.running = !this.running
  },
  setInterval(val) {
    this.interval = val
  },
  nextLight() {
    this.currentLight = (this.currentLight + 1) % 7
  },
  reset() {
    this.currentLight = 0
    this.running = false
  }
}


export default {...actions}