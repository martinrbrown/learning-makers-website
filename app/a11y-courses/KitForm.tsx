'use client'

import { useEffect, useRef } from 'react'

export default function KitForm() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container || container.querySelector('script')) return
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-uid', '1d8d5f5aa8')
    script.src = 'https://learningmakers.kit.com/1d8d5f5aa8/index.js'
    container.appendChild(script)
  }, [])

  return <div ref={ref} />
}
