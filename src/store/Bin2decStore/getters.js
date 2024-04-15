const getters = {
  DecimalText(state) {
    if(state.binaryText !== ''){
      if (state.binaryText.match(/^[0-1]+$/g) === null){
        state.ErrorMessage = 'You entered a non-binary digit (please enter only 0 or 1).'
        return
      }
  
      state.ErrorMessage = '' 
      
      const reversedBinaryText = state.binaryText
        .split('')
        .map(Number) // Convert to a number from string
        .reverse()
  
      // Calculate the result by accumulating previous vaue
      const result = reversedBinaryText.reduce(
        (accumulator, currentValue, idx) =>
          accumulator + currentValue * Math.pow(2, idx)
      )
      return result
    }
  }

}

export default {...getters}