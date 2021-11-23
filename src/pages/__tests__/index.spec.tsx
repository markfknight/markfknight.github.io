/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';

import Home, { Data } from '../index';
import { PageProps } from 'gatsby';

jest.mock('../../components/seo');
jest.mock('../../components/post-list');

afterEach(cleanup);

describe(`Index snapshot`, () => {
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

    const { container } = render(<Home {...props} />);

    expect(container).toMatchSnapshot();
  });
});
