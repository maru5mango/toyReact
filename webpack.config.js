const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const prod = process.env.NODE_ENV === "production";

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const os = require("os");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    cache: !prod,

    entry: "./src/index.tsx",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    resolve: {
        alias: {
            "@static": path.join(__dirname, "static"),
            "@assets": path.join(__dirname, "assets"),
            "@utils": path.join(__dirname, "src", "@utils"),
            "@customTags": path.join(__dirname, "src", "@customTags"),
            components: path.join(__dirname, "src", "components"),
            const: path.join(__dirname, "src", "const"),
            plugins: path.join(__dirname, "src", "plugins"),
            routers: path.join(__dirname, "src", "routers"),
            store: path.join(__dirname, "src", "store"),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
            },
            {
                test: /\.js$/,
                exclude: "/node_modules",
                include: resolve(__dirname, "src"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: "/node_modules/",
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },

    optimization: {
        minimize: true,
        concatenateModules: true,
        chunkIds: "size",
        minimizer: [
            new CssMinimizerPlugin({
                parallel: os.cpus().length - 1,
            }),
        ],
    },

    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3000,
        hot: true,
        publicPath: "/",
    },

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },

    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
};
