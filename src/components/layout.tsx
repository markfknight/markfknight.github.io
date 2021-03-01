import { Link, PageRendererProps } from 'gatsby';
import React, { PropsWithChildren } from 'react';

export type LayoutProps = PageRendererProps & { title: string };

const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {
  const { location, title, children } = props;

  const header =
    location.pathname === `${__PATH_PREFIX__}/` ? (
      <h1>
        <Link to={`/`}>{title}</Link>
      </h1>
    ) : (
      <h3>
        <Link to={`/`}>{title}</Link>
      </h3>
    );
  return (
    <div className="container max-w-3xl px4 py10">
      <header className="py-10">{header}</header>
      <main>{children}</main>
      <footer className="py-10 text-center">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
