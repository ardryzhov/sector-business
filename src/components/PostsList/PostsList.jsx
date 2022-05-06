import React from 'react'
import './PostsList.scss'

import PostItem from '../PostItem'

const PostsList = ({ currentUsers }) => {
	return (
		<>
			<div className='posts_list__wrap'>
				{currentUsers.map((val) => (
					<PostItem key={val.id} {...val} />
				))}
			</div>
		</>
	)
}

export default PostsList
