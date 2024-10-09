
const path = require("path");

const MinCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // エントリーポイントの設定
    entry: "./src/index.js",

    module:{
        rules:[
            {
                test: /\.(scss|sass|css)$/i,
                use: [MinCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MinCssExtractPlugin({
            filename: "style.css",
        }),
    ],
    devtool: "source-map",

    // ファイルの出力先の設定
    output: {
        // 出力さきにパスを決定
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
    // 開発用
    mode: "development",
    // 本番用
    // mode: "production",

    // ローカルサーバーの設定
    devServer: {
        static: "dist",
        open : true,
    },
}