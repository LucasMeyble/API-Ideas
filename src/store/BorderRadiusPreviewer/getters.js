const getters = {
  borderRadius(state) {
    if (state.verticalSplit) {
      return `${state.topLeft} ${state.topRight} ${state.bottomRight} ${state.bottomLeft} / ${state.topLeftSecond} ${state.topRightSecond} ${state.bottomRightSecond} ${state.bottomLeftSecond}`;
    }
    return `${state.topLeft} ${state.topRight} ${state.bottomRight} ${state.bottomLeft}`;
  },
}


export default {...getters}