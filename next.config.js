const withTypescript = require('@zeit/next-typescript');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.(md|mdx)$/,
});

module.exports = withMDX(
    withTypescript({
        pageExtensions: ['tsx', 'md', 'mdx'],
        target: 'serverless',
    }),
);
