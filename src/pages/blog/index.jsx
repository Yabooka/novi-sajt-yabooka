import { getArticlesMetaData, getTags } from '@/api/blog'
import Page from '@/components/page'
import BlogIndex from '@/components/blog/index'

export default function BlogIndexPage({ articles, tags }) {
  return (
    <div className='container mx-auto'>
      <Page
        title='Yabooka | Blog'
        description='Saznajte više o popravkama i čestim problemima koji se javljaju kod Apple uređaja - iPhone 7 audio čip, iPhone servis Niš, Apple servis Niš'
      >
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
