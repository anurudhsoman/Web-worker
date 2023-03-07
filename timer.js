const worker = new worker('timer-worker.js')
  const start = performance.now()
  console.log("js file from git")
  setTimeout(() => {
    console.log(performance.now() - start)
  }, 1000 * 60 * 10) 
