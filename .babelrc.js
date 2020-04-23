

const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const outputModule = process.env.OUTPUT_MODULE;

module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: outputModule || false
            }
        ],
        "@babel/preset-react"
    ],
    plugins: [
        ["add-module-exports"],
        ["@babel/plugin-proposal-export-default-from"],
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ],
        [
            "@babel/plugin-transform-runtime",
            {
                "regenerator": true
            }
        ],
        env === "test" && "@babel/plugin-transform-modules-commonjs"
    ].filter(Boolean)
}

