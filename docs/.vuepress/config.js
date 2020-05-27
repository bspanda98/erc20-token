module.exports = {
  title: 'Smart Contract for a ERC20 Token',
  description: 'A simple Smart Contract for a Standard, Capped, Mintable, Burnable, Payable ERC20 Token.',
  base: '/erc20-token/',
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-115756440-2',
    }],
  ],
  themeConfig: {
    repo: 'vittominacori/erc20-token',
    sidebar: 'auto',
  },
};
