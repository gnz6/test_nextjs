import { ChildLayout } from '@/components/layouts/ChildLayout'
import { Layout } from '@/components/layouts/Layout'

export default function About() {
  return (
    <>
      <h1> About </h1>
    </>
  )
}


About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ChildLayout>
        {page}
      </ChildLayout>
    </Layout>
  )
}