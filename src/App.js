import './App.scss'
import PostsPanel from './components/PostsPanel/PostsPanel'
import SearchInput from './components/SearchInput'

function App() {
	return (
		<div className='app-wrap'>
			<div className='container'>
				<SearchInput />
				<PostsPanel />
			</div>
		</div>
	)
}

export default App
