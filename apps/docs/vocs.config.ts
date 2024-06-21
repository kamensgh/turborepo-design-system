import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Foundations',
      collapsed: true,
      items: [
        {
          text: 'Overview',
          link: '/foundations',
        },
        {
          text: 'Color',
          link: '/foundations/color',
        },
        {
          text: 'Spacing',
          link: '/foundations/spacing',
        },
        {
          text: 'Typography',
          link: '/foundations/typography',
        },
      ],
    },
    {
      text: 'Components',
      collapsed: true,
      items: [
        {
          text: 'Overview',
          link: '/components',
        },
        {
          text: 'Button',
          link: '/components/button',
        },
      ],
    },
  ],
});
