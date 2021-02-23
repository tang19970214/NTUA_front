const path = require("path");

function resolve(dir) {
    return path.join(__dirname, "/", dir);
}

module.exports = {
    publicPath: "/",
    lintOnSave: process.env.NODE_ENV !== "production",
    devServer: {
        port: 1804, // 端口
        overlay: {
            warnings: true,
            errors: false,
        },
    },
    configureWebpack: {
        devtool: "source-map",
    },
    // svg配置
    chainWebpack(config) {
        const entry = config.entry("app");
        entry
            .add("babel-polyfill") //一定要在首行引入，否则IE浏览器还是会报错
            .end();
        const svgRule = config.module.rule("svg");
        svgRule.exclude.add(path.join(__dirname, "node_modules", "@ckeditor"));
        
        config.module
            .rule("svg")
            .exclude.add(resolve("src/icons"))
            .end();
        config.module
            .rule("icons")
            .test(/\.svg$/)
            .include.add(resolve("src/icons"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]",
            })
            .end();
    },
};