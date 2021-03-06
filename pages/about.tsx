import Head from '../components/Head'
import RGBSplit from '../components/RGBSplit'
import BioContent from '../dan-edits-these/bio.md'
import collaborators from '../dan-edits-these/collaborators.json'
import meta from '../dan-edits-these/meta.json'

const Bio: React.FC = () => (
	<article>
		<Head title="Dan Tombs’ Bio" description={meta.description.bio} />
		<RGBSplit>
			<section>
				<h2>Collaborations and commissions</h2>
				<ul>
					{collaborators.sort().map(collaborator => (
						<li key={collaborator}>{collaborator}</li>
					))}
				</ul>
			</section>
			<section>
				<BioContent />
			</section>
		</RGBSplit>

		<style jsx>{`
			article {
				position: relative;
				z-index: 10;
				text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
				background-color: rgba(0, 0, 0, 0.4);
				padding: 0 10px;
			}

			@media (min-width: 640px) {
				h1 {
					display: block;
				}
			}

			article :global(h2) {
				text-align: center;
				font-weight: 300;
				padding-top: 15px;
				margin-bottom: 1em;
				position: relative;
				letter-spacing: -0.01em;
				font-size: 150%;
				line-height: 1;
			}

			@media (min-width: 640px) {
				article :global(h2) {
					font-size: 200%;
				}
			}

			article :global(p) {
				display: inline;
				padding: 3px 0 4px;
				position: relative;
				font-weight: 300;
			}

			article :global(p + p::before) {
				display: block;
				content: '';
				clear: both;
				height: 15px;
			}

			article :global(p:first-of-type) {
				text-indent: 0;
			}

			article :global(em:first-child) {
				text-transform: uppercase;
				font-style: normal;
			}

			ul {
				column-count: 1;
				padding-bottom: 1rem;
			}

			@media (min-width: 320px) {
				ul {
					column-count: 2;
				}
			}

			li {
				position: relative;
				font-weight: 200;
				margin-bottom: 0.3em;
				list-style: none;
				line-height: 1.3;
				font-size: 75%;
				font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
				text-transform: uppercase;
			}

			li:before {
				content: '> ';
			}
		`}</style>
	</article>
)

export default Bio
