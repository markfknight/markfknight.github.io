import React from 'react';
import { cleanup, render } from '@testing-library/react';

import NotFoundPage, { Data } from '../404';
import { PageProps } from 'gatsby';

jest.mock('../../components/seo');

afterEach(cleanup);

describe(`404 snapshot`, () => {
  it(`renders correclty`, () => {
    const props: PageProps<Data> = {
      location: {},
      data: {
        site: {
          siteMetadata: {
            title: 'test',
          },
        },
      },
    } as PageProps<Data>;

    const tree = render(<NotFoundPage {...props} />);

    expect(tree).toMatchSnapshot();
  });
});
