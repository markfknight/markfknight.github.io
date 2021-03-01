import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

export type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const NotFoundPage: React.FC<PageProps<Data>> = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
