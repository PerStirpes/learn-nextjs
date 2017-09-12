import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <img src={props.show.image.medium} />
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);
  return { show };
};

export default Post;
