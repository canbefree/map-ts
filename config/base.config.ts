import { Configuration } from 'webpack'
import { rootPath } from './path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

import env_config from './env'

const baseconfig: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: path.resolve(rootPath, 'src/main.ts'),
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // Remove this line to enable type checking in webpack builds
                        transpileOnly: true,
                        compilerOptions: {
                            module: 'esnext',
                        },
                    },
                },
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateParameters: {
                key: env_config.key,
                jscode: env_config.jscode,
            },
            template: path.resolve(rootPath, 'src/template/index.ejs'),
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
}


export default baseconfig
