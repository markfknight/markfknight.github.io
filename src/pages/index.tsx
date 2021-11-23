import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { PostList } from '../components/post-list';
import { SEO } from '../components/seo';

export type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Home = (props: PageProps<Data>) => {
  const { data } = props;
  const title = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={title}>
      <SEO title="Home" />
      <PostList></PostList>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
