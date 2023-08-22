module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
    },
  },
  // email: {
  //   config: {
  //     provider: 'nodemailer',
  //     providerOptions: {
  //       host: env('SMTP_HOST', 'smtp.gmail.com'),
  //       port: env('SMTP_PORT', 465),
  //       auth: {
  //         user: env('cqmyg14ds2@gmail.com'),
  //         pass: env('xoadpzdyinlxaear'),
  //       },
  //       // ... any custom nodemailer options
  //     },
  //     secure: false,
  //     settings: {
  //       defaultFrom: 'cqmyg14ds2@gmail.com',
  //       defaultReplyTo: 'cqmyg14ds2@gmail.com',
  //     },
  //   },
  // },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'cqmyg14ds2@gmail.com',
          pass: 'xoadpzdyinlxaear',
        },
      },
      secure: true,
      settings: {
        defaultFrom: 'cqmyg14ds2@gmail.com',
        defaultReplyTo: 'cqmyg14ds2@gmail.com',
      },
    },
  },
  menus: {
    config: {
      maxDepth: 5,
      // layouts: {
      //   menuItem: {
      //     link: [
      //       {
      //         input: {
      //           label: "顶级菜单",
      //           name: "isGroupName",
      //           type: "bool",
      //         },
      //         grid: {
      //           col: 6,
      //         },
      //       },
      //     ],
      //   },
      // },
    },
  },
  comments: {
    enabled: true,
    config: {
    //   badWords: false,
    //   moderatorRoles: ["Authenticated"],
    //   approvalFlow: ["api::page.page"],
    //   entryLabel: {
    //     "*": ["Title", "title", "Name", "name", "Subject", "subject"],
    //     "api::page.page": ["MyField"],
    //   },
    //   blockedAuthorProps: ["name", "email"],
    //   reportReasons: {
    //     MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
    //   },
      gql: {
      },
    },
  },
});
