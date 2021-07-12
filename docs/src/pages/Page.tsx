import Link from 'next/link';

import { Button } from '@vimeo/iris/components';
import { LightDark, Search } from '@vimeo/iris/icons';
import { themes } from '@vimeo/iris/themes';

import { Footer, Nav } from './index.style';

export function Page({ themeSet, children, ...props }) {
  function toggleTheme() {
    themeSet((theme) =>
      theme.name === 'dark' ? themes.light : themes.dark
    );
  }

  return (
    <>
      <Nav>
        <h1
          css={`
            margin: 0;
          `}
        >
          <Link href="/">
            <a>vimeo.design</a>
          </Link>
        </h1>
        <span>Principles</span>
        <Link href="/tokens">
          <a>Tokens</a>
        </Link>
        <Link href="/components">
          <a>Components</a>
        </Link>
        <span>Patterns</span>
        <span>Content</span>
        <span>Resources</span>
        <Search
          css={`
            width: 2rem;
            margin: 0 0 0 auto;

            * {
              fill: white;
            }
          `}
        />
      </Nav>

      <main
        css={`
          padding: 1rem;
        `}
      >
        {children}
      </main>

      <Footer>
        <span style={{ flexGrow: 1, paddingLeft: '1rem' }}>
          Footer
        </span>
        <Button
          icon={<LightDark />}
          onClick={toggleTheme}
          size="md"
          style={{ marginLeft: 'auto', marginRight: '1rem' }}
        />
      </Footer>
    </>
  );
}
