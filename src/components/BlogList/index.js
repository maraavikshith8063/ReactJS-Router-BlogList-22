import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  return (
    <ul className="blog-list">
      {blogDetails.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogListDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
