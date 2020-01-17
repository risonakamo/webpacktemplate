const MiniCssExtractPlugin=require("mini-css-extract-plugin");
// const CopyPlugin=require("copy-webpack-plugin");
// const WebpackBar=require("webpackbar");

module.exports={
    mode:"development",
    entry:{
        index:"./index.js"
    },
    output:{
        path:`${__dirname}/build`,
        filename:"[name]-build.js"
    },

    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-react"]
                    }
                }
            },
            {
                test:/\.(less|css)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {loader:"css-loader"},
                    {loader:"less-loader"}
                ]
            }
        ]
    },

    plugins:[
        new MiniCssExtractPlugin({
            filename:"[name]-build.css"
        })

        // new CopyPlugin([
        //     {from:"src/index.html",to:"../"}
        // ]),

        // new WebpackBar()
    ],

    optimization:{
        splitChunks:{
            chunks:"all",
            automaticNameDelimiter:"-"
        }
    }
};