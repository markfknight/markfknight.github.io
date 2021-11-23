/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import { Helmet } from 'react-helmet';

import { PureSEO } from '../seo';

afterEach(cleanup);

describe(`SEO snapshot`, () => {
  it(`renders correctly`, () => {
    const data = {
      site: {
        siteMetadata: {
          title: `Your Title`,
          description: `Description`,
          author: `Your Name`,
        },
      },
    };

    const { unmount } = render(<PureSEO title="Test" data={data} />);
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual(`Test | Your Title`);
    unmount();
  });
});
