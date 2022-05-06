import React from 'react'
import './PostsPanel.scss'

import { sortUsers } from '../../redux/userSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PostsPanel = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const sortBy = (val) => {
		dispatch(sortUsers({ tag: val }))
		navigate('/1')
	}
	return (
		<>
			<div className='posts_panel__wrap'>
				<div className='posts_panel__btns'>
					<div className='posts_btn__id'>
						<div className='sort__btn' onClick={() => sortBy('id')}>
							<span>ID</span>
							<FontAwesomeIcon icon={faAngleDown} />
						</div>
					</div>
					<div className='posts_btn__title'>
						<div className='sort__btn' onClick={() => sortBy('title')}>
							<span>Заголовок</span>
							<FontAwesomeIcon icon={faAngleDown} />
						</div>
					</div>
					<div className='posts_btn__desc'>
						<div className='sort__btn' onClick={() => sortBy('body')}>
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
