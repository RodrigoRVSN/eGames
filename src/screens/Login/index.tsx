import React from 'react'
import Form from '@components/Form'
import Layout from '@components/Layout'
import data from './index.data'

export default function Login(): JSX.Element {
  return (
    <Layout>
      <Form title={data.title} />
    </Layout>
  )
}
