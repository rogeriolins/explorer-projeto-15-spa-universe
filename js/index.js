import { Router } from "/js/router.js"

const router = new Router()

router.add("/", "/pages/home.html", "")
router.add("/theuniverse", "/pages/theuniverse.html", "page-theuniverse")
router.add("/exploration", "/pages/exploration.html", "page-exploration ")
router.add(404, "/pages/404.html", "page-404")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
