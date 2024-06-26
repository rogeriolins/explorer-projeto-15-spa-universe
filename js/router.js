export class Router {
  routes = {}

  add(routeName, linkPage) {
    this.routes[routeName] = linkPage
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    const classesBackground = document.querySelector("body")
    const routeFinished = this.extrairHome(route)
    const page1 = document.getElementById("home")
    const page2 = document.getElementById("theuniverse")
    const page3 = document.getElementById("exploration")

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })

    classesBackground.classList.remove(...classesBackground.classList)
    classesBackground.classList.add("page-" + routeFinished)

    page1.classList.remove("visited-current")
    page2.classList.remove("visited-current")
    page3.classList.remove("visited-current")

    if (routeFinished == "home") {
      page1.classList.add("visited-current")
    } else if (routeFinished == "theuniverse") {
      page2.classList.add("visited-current")
    } else if (routeFinished == "exploration") {
      page3.classList.add("visited-current")
    }
  }

  extrairHome(caminho) {
    // Encontrar a posição do último '/'
    let ultimaBarra = caminho.lastIndexOf("/")

    // Encontrar a posição do '.html'
    let pontoHtml = caminho.lastIndexOf(".html")

    // Extrair a parte entre a última '/' e o '.html'
    let home = caminho.substring(ultimaBarra + 1, pontoHtml)

    return home
  }
}
