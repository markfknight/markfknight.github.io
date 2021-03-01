import React, { PropsWithChildren } from 'react';
import { cleanup, render } from '@testing-library/react';

import { PostListProps, PostListData, PurePostList } from '../post-list';

afterEach(cleanup);

describe(`Post List snapshot`, () => {
  it(`renders correctly`, () => {
    const props: PropsWithChildren<PostListProps & { data: PostListData }> = {
      data: {
        allMarkdownRemark: {
          totalCount: 1,
          edges: [
            {
              node: {
                id: `id`,
                fields: {
                  slug: `slug`,
                },
                frontmatter: {
                  title: `title`,
                  date: `2021-01-01`,
                },
                excerpt: `excerpt`,
              },
            },
          ],
        },
      },
    };

    const tree = render(<PurePostList {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
