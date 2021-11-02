import { getArticlesMetaData, getTags } from '@/api/blog'
import Page from '@/components/page'
import BlogIndex from '@/components/blog/index'

export default function BlogIndexPage({ articles, tags }) {
  return (
    <div className='container mx-auto'>
      <Page title={'Yabooka | Blog'}>
        <BlogIndex articles={articles} tags={tags} />
      </Page>
    </div>
  )
}

export function getServerSideProps() {
  return {
    props: {
      articles: getArticlesMetaData(),
      tags: getTags(),
    },
  }
}
