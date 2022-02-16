import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { Title } from './styles'
import brandImg from '@assets/logo.png'

interface IForm {
  title: string
}

export default function Form({ title }: IForm): JSX.Element {
  return (
    <>
      <Image source={brandImg as ImageSourcePropType} />
      <Title>{title}</Title>
    </>
  )
}
