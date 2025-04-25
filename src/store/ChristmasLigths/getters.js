const getters = {
  isRunning: (state) => state.running,
  currentLightValue: (state) => state.currentLight,
  intervalValue: (state) => state.interval
}

export default {...getters}