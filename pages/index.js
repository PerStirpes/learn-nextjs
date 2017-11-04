// This is Link API

import Layout from '../components/MyLayout.js';
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
    <a>{props.title}</a>
    </Link>
  </li>
)
export default () =>  (
  <Layout>
    <h1>Hello Next.js</h1>
    <h2>My Blog</h2>
    <ul>
      <PostLink title="stuff i've learned"/>
      <PostLink title="random"/>
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
);

