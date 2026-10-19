exports.createPages = async ({ actions }) => {
    const { createPage } = actions;

    createPage({
        path: "/skynet-accessibility-scanner/",
        component: require.resolve("./src/pages/skynet-accessibility-scanner.js")
    });
};
