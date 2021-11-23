import { graphql, Link, useStaticQuery } from 'gatsby';
import { ReactNode } from 'react';

export type PostListData = {
  allMarkdownRemark: {
    totalCount: number;
    edges: [
      {
        node: {
          id: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            date: string;
          };
          excerpt: string;
        };
      }
    ];
  };
};

export type PostListProps = {
  title?: string;
  children?: ReactNode;
};

export const PurePostList = (props: PostListProps & { data: PostListData }) => (
  <>
    <div className="space-y-8">
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <article
          className="p-4 flow-root rounded-sm shadow-md space-x-2"
          key={node.id}
        >
          <header>
            <h2>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h2>
            <span className="text-gray-500">{node.frontmatter.date}</span>
          </header>
          <section>
            <p>{node.excerpt}</p>
          </section>
        </article>
      ))}
    </div>
  </>
);

export const PostList = (props: PostListProps) => {
  const data: PostListData = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
            }
          }
        }
      }
    `
  );
  return <PurePostList {...props} data={data}></PurePostList>;
};
