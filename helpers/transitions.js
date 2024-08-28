export const grain = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 0.0175,
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] }
  }
}

export const reveal = {
	initial: { y: '120%' },
  enter: { 
    y: 0,
    transition: { duration: 1, delay: 1.75, ease: [0.83, 0, 0.17, 1] }
  }
}