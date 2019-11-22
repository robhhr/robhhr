import { useState, useEffect } from "react"

const navSize = () => {
  const [scrolled, setScrolled] = useState()

  const onScroll = () => setScrolled(window.scrollY > 10)

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return [scrolled]
}

export default navSize
