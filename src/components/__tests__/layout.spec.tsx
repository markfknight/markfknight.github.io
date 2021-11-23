/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';

import Layout, { LayoutProps } from '../layout';

afterEach(cleanup);

describe(`Layout snapshot`, () => {
  it(`renders correctly when root pathname`, () => {
    const props = {
      title: `test`,
      location: {
        pathname: `/`,
      },
    } as LayoutProps;

    const { container } = render(
      <Layout {...props}>
        <p>Test</p>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });

  it(`renders correctly when not root pathname`, () => {
    const props = {
      title: `test`,
      location: {
        pathname: ``,
      },
    } as LayoutProps;

    const { container } = render(
      <Layout {...props}>
        <p>Test</p>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});
