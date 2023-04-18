// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eco Tulum',
  tagline: 'Luxury Real Estate',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://brave-pebble-094166c10.3.azurestaticapps.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YeikoSantamaria', // Usually your GitHub org/user name.
  projectName: 'YeikoSantamaria.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',

      algolia: {
        apiKey: 'c24757fd3f34e0e6fccf1dba0275f1f0',
        indexName: 'EcoTulum',
        appId: 'VPUGE9BFJE',
        // Optional: see doc section bellow
        contextualSearch: true,
  
        // Optional: Algolia search parameters
        //searchParameters: {},
  
        //... other Algolia params
      },
  

      navbar: {
        title: 'EcoTulum',
        logo: {
          alt: 'EcoTulum Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Desarrollos',
          },
         // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://Instagram.com/',
            label: 'Instagram',
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
                label: 'Desarrollos',
                to: '/docs/Desarrollos/Tulum',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Instagram',
                href: 'https://Instagram.com/questions/tagged/docusaurus',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Google',
                href: 'https://google/maps/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EcoTulum, Inc. Built with BUCODE.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
