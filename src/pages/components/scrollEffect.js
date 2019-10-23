import { useState, useEffect } from "react"

const navSize = () => {
  const [isScrolled, setIsScrolled] = useState()

  const onScroll = () => setIsScrolled(window.scrollY > 10)

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return [isScrolled]
}

export default navSize
