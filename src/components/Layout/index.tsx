import React from 'react'

import { Background } from './styles'

interface ILayout {
  children: React.ReactNode
}

export default function Layout({ children }: ILayout) {
  return <Background>{children}</Background>
}
