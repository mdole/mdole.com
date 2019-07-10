export const morningCode = () => {
  return `
      const timeInHours = new Date().getHours()
  // const timeInMinutes = new Date().getMinutes();
  const sleepInMs = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  async function routine() {
    while (timeInHours >= 7 && timeInHours <= 9) {
      getReady(timeInHours)
      await sleepInMs(10000)
    }
  }

  const getReady = time => {
    switch (time) {
      case 8:
        console.log("Feel like you should be working on code, stay on couch.")
        break
      case 7:
        console.log("Check phone. Relocate to couch.")
        break
      default:
        console.log("chill")
    }
  }
`
}
