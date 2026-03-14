const path = require("path")
const fs = require("fs-extra")
exports.onCreatePage = async ({ actions }) => {
    const { createPage } = actions;

    createPage({
        path: "/skynet-accessibility-scanner",
        component: require.resolve("./src/pages/skynet-accessibility-scanner.js")
    });
};
