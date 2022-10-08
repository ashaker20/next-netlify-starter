import { fetchEntries } from 'util/contentfulPosts'
import Post from '@components/Post'

export default function Home() {
  return (
    <div className="container">
      <div className = "posts">
        {posts.map((p) => {
          return <Post key = {p.date} date = {p.date} image = {p.image.fields} title = {p.title} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  } 
}
