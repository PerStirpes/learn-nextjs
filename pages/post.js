import Layout from '../components/MyLayout.js'

//Our /post page accepts the title via the query string parameter title. In client side routing, we can easily give it a proper value with URL masking.
//(via the as prop in Link).
export default (props) => (
    <Layout>
       <h1>{props.url.query.title}</h1>
       <p>This is the blog post content.</p>
    </Layout>
)