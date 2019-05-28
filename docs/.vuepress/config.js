module.exports = {
  title: "Cosmos SDK 中文文档|深入浅出区块链",
  description: "Cosmos SDK 开发手册 & Gaia 中文文档  ",
  ga: "UA-51029217-2",
  dest: "./dist/docs",
  base: "/cosmos/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: "lbc-team/cosmos-sdk",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "lbc",
    editLinkText: '帮助完善文档',
    lastUpdated: true,
    algolia: {
      apiKey: 'a6e2f64347bb826b732e118c1366819a',
      indexName: 'cosmos_network',
      debug: false
    },
    nav: [
      { text: "首页", link: "https://learnblockchain.cn" },
      { text: "En", link: "https://cosmos.network/docs/" },
      { text: "RPC", link: "https://cosmos.network/rpc/" }
    ],
    sidebar: [
      {
        title: "Overview",
        collapsable: true,
        children: [
          "/intro/",
          "/intro/sdk-design",
          "/intro/ocap"
        ]
      },
      {
        title: "Tutorial",
        collapsable: true,
        children: [
          "/tutorial/",
          "/tutorial/01-app-design",
          "/tutorial/02-app-init",
          "/tutorial/03-types",
          "/tutorial/04-keeper",
          "/tutorial/05-msgs-handlers",
          "/tutorial/06-set-name",
          "/tutorial/07-buy-name",
          "/tutorial/08-queriers",
          "/tutorial/09-codec",
          "/tutorial/10-cli",
          "/tutorial/11-rest",
          "/tutorial/12-app-complete",
          "/tutorial/13-entrypoint",
          "/tutorial/14-dep",
          "/tutorial/15-build-run",
          "/tutorial/16-run-rest"
        ]
      },
      {
        title: "Clients",
        collapsable: true,
        children: [
      	  "/clients/",
          "/clients/cli",
          "/clients/service-providers",
      	  "/clients/lite/", // this renders the readme
      	  "/clients/lite/getting_started",
      	  "/clients/lite/specification"
      	]
      }
    ]
  }
}
