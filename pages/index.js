import Layout from '../components/MyLayout.js';
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () =>  (
  <Layout>
    <h1>Hello Next.js</h1>
    <ul>
      <PostLink id="stuff-learned" title="stuff ive learned"/>
      <PostLink id="random" title="random"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
);

