import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCSSLoader (isDevelopment: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string): boolean => Boolean(path.includes('.module.')),
            localIdentName: isDevelopment
              ? '[path][name]__[local]_[hash:base64:4]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };
}
