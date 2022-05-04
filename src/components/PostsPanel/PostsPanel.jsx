import React from 'react'
import './PostsPanel.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const PostsPanel = () => {
	return (
		<>
			<div className='posts_panel__wrap'>
				<div className='posts_panel__btns'>
					<div className='posts_btn__id'>
						<div className='sort__btn'>
							<span>ID</span>
							<FontAwesomeIcon icon={faAngleDown} />
						</div>
					</div>
					<div className='posts_btn__title'>
						<div className='sort__btn'>
							<span>Заголовок</span>
							<FontAwesomeIcon icon={faAngleDown} />
						</div>
					</div>
					<div className='posts_btn__desc'>
						<div className='sort__btn'>
							<span>Описание</span>
							<FontAwesomeIcon icon={faAngleDown} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PostsPanel
