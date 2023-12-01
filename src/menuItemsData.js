export const menuItemsData = [
    // ...
    {
        title: 'Home',
        url: '/',
      },
      {
        title: 'About',
        url: '/about',
        submenu: [
            {
              title: 'Web Design',
              url: 'web-design',
            },
            {
              title: 'Web Development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
      },
    {
      title: 'Services',
      url: '/services',
      submenu: [
        {
          title: 'Web Design',
          url: 'web-design',
        },
        {
          title: 'Web Development',
          url: 'web-dev',
          submenu: [
            {
              title: 'Frontend',
              url: 'frontend',
            },
            {
              title: 'Backend',
              submenu: [
                {
                  title: 'NodeJS',
                  url: 'node',
                },
                {
                  title: 'PHP',
                  url: 'php',
                },
              ],
            },
        ]
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    // ...
  ];

// export const menuItemsData = [
//     // ...
//     {
//       title: 'Web Development',
//       url: 'web-dev',
//       submenu: [
//         {
//           title: 'Frontend',
//           url: 'frontend',
//         },
//         {
//           title: 'Backend',
//           submenu: [
//             {
//               title: 'NodeJS',
//               url: 'node',
//             },
//             {
//               title: 'PHP',
//               url: 'php',
//             },
//           ],
//         },
//       ],
//     },
//     // ...
//   ];