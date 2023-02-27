import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDevelopment }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
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
                    },
                }
            },
            'sass-loader',
        ],
    };

    return [
        typescriptLoader,
        cssLoader,
    ]
}
