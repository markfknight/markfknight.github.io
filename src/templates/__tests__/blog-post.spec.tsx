/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import BlogPost, { BlogPostProps } from '../blog-post';

jest.mock(`../../components/seo`);

describe(`Blog Post snapshot`, () => {
  it(`renders correctly`, () => {
    const props: BlogPostProps = {
      location: {
        pathname: ``,
      },
      data: {
        site: {
          siteMetadata: {
            title: ``,
          },
        },
        markdownRemark: {
          id: ``,
          excerpt: ``,
          html: ``,
          fields: {
            slug: ``,
          },
          frontmatter: {
            title: ``,
            date: ``,
          },
        },
      },
      pageContext: {
        previous: {
          id: ``,
          excerpt: ``,
          html: ``,
          fields: {
            slug: ``,
          },
          frontmatter: {
            title: ``,
            date: ``,
          },
        },
        next: {
          id: ``,
          excerpt: ``,
          html: ``,
          fields: {
            slug: ``,
          },
          frontmatter: {
            title: ``,
            date: ``,
          },
        },
      },
    } as BlogPostProps;
    const { container } = render(<BlogPost {...props} />);
    expect(container).toMatchSnapshot();
  });
});
