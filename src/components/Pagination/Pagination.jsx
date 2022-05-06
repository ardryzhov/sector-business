import React from 'react'
import './Pagination.scss'

import { changePage } from '../../redux/userSlice'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Pagination = ({ currentPage }) => {
	const state = useSelector((state) => state.users)
	const totalPage = state.totalPage
	const filtredPage = state.filtredPage
	const dispatch = useDispatch()

	const pageArr = filtredPage.length ? filtredPage : totalPage

	const prevBtn = +currentPage - 1 !== 0
	const nextBtn = +currentPage + 1 > pageArr.length

	return (
		<div className='pagination__wrap'>
			<Link
				className={prevBtn ? 'page_btn' : 'page_btn disable_link'}
				onClick={() =>
					prevBtn ? dispatch(changePage(+currentPage - 1)) : false
				}
				to={prevBtn ? `/${+currentPage - 1}` : `/${currentPage}`}
			>
				Назад
			</Link>
			<ul>
				{pageArr.map((i) => (
					<li
						className={
							i === +currentPage ? 'page__item active__page' : 'page__item'
						}
						key={i}
						onClick={() => dispatch(changePage(i))}
					>
						<Link to={`/${i}`}>{i}</Link>
					</li>
				))}
			</ul>
			<Link
				className={nextBtn ? 'page_btn disable_link' : 'page_btn'}
				onClick={() =>
					!nextBtn ? dispatch(changePage(+currentPage + 1)) : false
				}
				to={!nextBtn ? `/${+currentPage + 1}` : `/${currentPage}`}
			>
				Вперед
			</Link>
		</div>
	)
}

export default Pagination
