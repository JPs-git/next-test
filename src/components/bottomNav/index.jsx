'use client'
import React, { useState } from 'react'
import './index.scss'
import { useRouter } from 'next/navigation'

export default function bottomNav() {
  const navItems = [
    { name: 'killed', url: '/main/killed' },
    { name: 'existing', url: '/main/existing' },
    { name: 'realized', url: '/main/realized' },
  ]
  const router = useRouter()
  const [activePage, setActivePage] = useState('existing')
  const handleChangeNav = (name, url) => {
    router.push(url)
    setActivePage(name)
  }

  return (
    <div className="bottom-nav">
      {navItems.map(({ name, url }) => (
        <div
          className={['nav-btn', `${activePage === name ? 'active' : ''}`].join(
            ' '
          )}
          onClick={() => handleChangeNav(name, url)}
        >
          {name}
        </div>
      ))}
    </div>
  )
}
