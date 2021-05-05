export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6092a8d294606d381d4a24ef',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mqrwqnet',
                  apiId: 'ff3a340a-22cc-4974-86d7-c79b7ff2951b'
                },
                {
                  buildHookId: '6092a8d3e75eec296d249e08',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xptczdeb',
                  apiId: 'a9aac2bd-354d-4a15-959b-0c640588015f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sonlv10/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xptczdeb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
