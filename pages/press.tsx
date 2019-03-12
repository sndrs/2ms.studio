import pages from '../.scraped/urls.json'
import Page from '../components/Page'
import ScrapedSite from '../components/ScrapedSite'

const Home: React.FC<{}> = () => (
	<Page>
		<div>
			{['red', 'lime', 'blue', 'main'].map(colour => (
				<ScrapedSite color={colour} content={pages[2]} key={colour} />
			))}
		</div>
		<style jsx>{`
			div {
				position: relative;
				z-index: 10;
				background-color: rgba(0, 0, 0, 0.4);
				mix-blend-mode: difference;
			}
		`}</style>
	</Page>
)

export default Home
