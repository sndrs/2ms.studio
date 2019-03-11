import NextHead from 'next/head'
import meta from '../dan-edits-these/meta.json'

export interface Props {
	title?: string
	description?: string
	children?: React.ReactNode
}

const Head: React.FC<Props> = ({
	title = '',
	description = meta.description.default,
	children,
} = {}) => (
	<>
		<NextHead>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1"
			/>
			<meta charSet="utf-8" />
			<meta name="description" content={description} />
			<title>{['2MS', title].filter(Boolean).join(' // ')}</title>
			{children}
		</NextHead>
		<style jsx global>
			{`
				html {
					line-height: 1.6;
					-webkit-text-size-adjust: 100%;
					min-height: 100%;
					height: 100%;
					box-sizing: border-box;
					-webkit-font-smoothing: antialiased;
				}
				*,
				*:before,
				*:after {
					box-sizing: inherit;
					margin: 0;
					padding: 0;
					font-weight: normal;
					font-size: 1em;
				}
				body {
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
						Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
						sans-serif;
					min-height: 100%;
					position: relative;
					overflow-x: hidden;
				}
				details,
				main {
					display: block;
				}
				h1,
				h2,
				h3,
				h4,
				h5,
				li {
					margin-bottom: 1rem;
				}
				hr {
					box-sizing: content-box;
					height: 0;
				}
				a {
					background-color: transparent;
				}
				b,
				strong {
					font-weight: bolder;
				}
				img {
					border-style: none;
				}
			`}
		</style>
	</>
)

export default Head
