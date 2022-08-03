module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          'welab-rn-ui': './src',
        },
      },
    ],
  ],
}
