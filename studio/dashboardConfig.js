export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5dd47dd54347cc63f1ed54cf',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-kcumfwqf',
                  apiId: '6c5d3994-6a0f-484e-a916-13338e9b528b'
                },
                {
                  buildHookId: '5dd47dd5e36c0271a4b53373',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-huchvchq',
                  apiId: 'e41c7bbb-e2cb-43c8-85e6-103e64bf70dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/covallee/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-huchvchq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
