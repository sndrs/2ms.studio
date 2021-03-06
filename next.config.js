const withMDX = require('@zeit/next-mdx')({
	extension: /\.(md|mdx)$/,
})
const withSize = require('next-size')
const withSvgr = require('next-svgr')

module.exports = withSvgr(
	withSize(
		withMDX({
			experimental: {
				modern: true,
				polyfillsOptimization: true,
			},
			pageExtensions: ['tsx', 'md', 'mdx'],
			webpack(config, { dev, isServer }) {
				const splitChunks =
					config.optimization && config.optimization.splitChunks
				if (splitChunks) {
					const cacheGroups = splitChunks.cacheGroups
					const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
					if (cacheGroups.framework) {
						cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
							test: preactModules,
						})
						cacheGroups.commons.name = 'framework'
					} else {
						cacheGroups.preact = {
							name: 'commons',
							chunks: 'all',
							test: preactModules,
						}
					}
				}

				// inject Preact DevTools
				if (dev && !isServer) {
					const entry = config.entry
					config.entry = () =>
						entry().then((entries) => {
							entries['main.js'] = ['preact/debug'].concat(
								entries['main.js'] || [],
							)
							return entries
						})
				}

				return config
			},
		}),
	),
)
