import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '$TITLE',
  tagline: '$DESCRIPTION',
  favicon: 'img/favicon.png',

  url: '$URL',
  baseUrl: '/$NAME/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  scripts: [
    
    {
      src:
        '/js/crisp.js',
      async: false,
    },
  ],

  themeConfig: {

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/tf_graph.png',
  metadata: [
    { name: 'description', content: '$DESCRIPTION' },
    { property: 'og:image', content: '$LOGO_URL' },
    { property: 'og:description', content: '$DESCRIPTION' },
    { property: 'og:title', content: '$TITLE' },
  ],
    navbar: {
      title: '',
      logo: {
        alt: '$NAME Logo',
        src: 'img/new_logo_tft.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/support',
          label: 'Support',
          position: 'left',
        },
        {
          href: '$URL',
          label: '$NAME',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'V3 Manual',
              href: 'https://manual.grid.tf/',
            },
            {
              label: 'V4 Docs',
              href: 'https://docs.threefold.io/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/threefold',
            },
            {
              label: 'X',
              href: 'https://x.com/threefold_io',
            },
            {
              label: 'Forum',
              href: 'https://forum.threefold.io',
            },
            {
              label: 'Support',
              to: '/support',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'ThreeFold.io',
              href: 'https://threefold.io',
            },
            {
              label: 'Dashboard',
              href: 'https://dashboard.grid.tf',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/threefoldtech/home',
            },
            {
              label: 'Gitea',
              href: 'https://git.ourworld.tf',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ThreeFold`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
