import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Meta = {
  name: string;
  content: string;
};

type SeoProps = {
  title: string;
  lang?: string;
  meta?: Meta[];
  keywords?: string[];
  description?: string;
};

type Data = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
};

export const PureSEO = (props: SeoProps & { data: Data }) => {
  const metaDescription =
    props.description || props.data.site.siteMetadata.description;
  const lang = props.lang || `en`;
  const meta = props.meta || [];
  const keywords = props.keywords || [];
  const title = props.title || ``;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${props.data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: props.data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? { content: keywords.join(`, `), name: `keywords` }
            : []
        )
        .concat(meta)}
    />
  );
};

export const SEO: React.FC<SeoProps> = (props) => {
  const data: Data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  return <PureSEO {...props} data={data}></PureSEO>;
};

// export default SEO;
// export PureSEO;
