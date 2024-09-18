document.addEventListener("click", e => {
    let seta
    if (e.target.matches(".seta")) {
      seta = e.target
    } else {
      seta = e.target.closest(".seta")
    }
    if (seta != null) onsetaClick(seta)
  })
  
  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".barras_de_progresso").forEach(calculateProgressBar)
  }, 250)
  window.addEventListener("resize", throttleProgressBar)
  
  document.querySelectorAll(".barras_de_progresso").forEach(calculateProgressBar)
  
  function calculateProgressBar(barraDeProgresso) {
    barraDeProgresso.innerHTML = ""
    const carrossel = barraDeProgresso.closest(".filmesLinhaGeral").querySelector(".carrossel")
    const itemCount = carrossel.children.length
    const itemsPerScreen = parseInt(
      getComputedStyle(carrossel).getPropertyValue("--items-per-screen")
    )
    let carrosselIndex = parseInt(
      getComputedStyle(carrossel).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)
  
    if (carrosselIndex >= progressBarItemCount) {
      carrossel.style.setProperty("--slider-index", progressBarItemCount - 1)
      carrosselIndex = progressBarItemCount - 1
    }
  
    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div")
      barItem.classList.add("item-progresso")
      if (i === carrosselIndex) {
        barItem.classList.add("active")
      }
      barraDeProgresso.append(barItem)
    }
  }
  
  function onsetaClick(seta) {
    const barraDeProgresso = seta.closest(".filmesLinhaGeral").querySelector(".barras_de_progresso")
    const carrossel = seta.closest(".filmesLinha").querySelector(".carrossel")
    const carrosselIndex = parseInt(
      getComputedStyle(carrossel).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = barraDeProgresso.children.length
    if (seta.classList.contains("seta_esquerda")) {
      if (carrosselIndex - 1 < 0) {
        carrossel.style.setProperty("--slider-index", progressBarItemCount - 1)
        barraDeProgresso.children[carrosselIndex].classList.remove("active")
        barraDeProgresso.children[progressBarItemCount - 1].classList.add("active")
      } else {
        carrossel.style.setProperty("--slider-index", carrosselIndex - 1)
        barraDeProgresso.children[carrosselIndex].classList.remove("active")
        barraDeProgresso.children[carrosselIndex - 1].classList.add("active")
      }
    }
  
    if (seta.classList.contains("seta_direita")) {
      if (carrosselIndex + 1 >= progressBarItemCount) {
        carrossel.style.setProperty("--slider-index", 0)
        barraDeProgresso.children[carrosselIndex].classList.remove("active")
        barraDeProgresso.children[0].classList.add("active")
      } else {
        carrossel.style.setProperty("--slider-index", carrosselIndex + 1)
        barraDeProgresso.children[carrosselIndex].classList.remove("active")
        barraDeProgresso.children[carrosselIndex + 1].classList.add("active")
      }
    }
  }
  
  function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
  }
  