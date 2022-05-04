import React from 'react'
import './Pagination.scss'

const Pagination = ({ usersPerPage, totalPage, paginate, currentPage }) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalPage / usersPerPage); i++) {
		pageNumbers.push(i)
	}

	const prevBtn = currentPage - 1 !== 0
	const nextBtn = currentPage + 1 <= pageNumbers.length

	return (
		<div className='pagination__wrap'>
			<button
				className='page_btn'
				onClick={() => (prevBtn ? paginate(currentPage - 1) : false)}
				disabled={!prevBtn}
			>
				Назад
			</button>
			<ul>
				{pageNumbers.map((i) => (
					<li
						className={
							i === currentPage ? 'page__item active__page' : 'page__item'
						}
						key={i}
						onClick={() => paginate(i)}
					>
						<span>{i}</span>
					</li>
				))}
			</ul>
			<button
				className='page_btn'
				onClick={() => (nextBtn ? paginate(currentPage + 1) : false)}
				disabled={!nextBtn}
			>
				Вперед
			</button>
		</div>
	)
}

export default Pagination
