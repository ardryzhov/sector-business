import React from 'react'
import './PostItem.scss'

const PostItem = ({ id, title, body }) => {
	return (
		<>
			<div className='post_item__wrap'>
				<div className='post__item_id'>
					<span>{id}</span>
				</div>
				<div className='post__item_title'>
					<span>{title}</span>
				</div>
				<div className='post__item_body'>
					<span>{body}</span>
				</div>
			</div>
		</>
	)
}

export default PostItem
