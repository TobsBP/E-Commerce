import { useState } from 'react'

export function usePagination<T>(items: T[], itemsPerPage = 15) {
	const [currentPage, setCurrentPage] = useState(1)

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage

	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
	const totalPages = Math.ceil(items.length / itemsPerPage)

	const paginate = (page: number) => setCurrentPage(page)

	return {
		currentPage,
		currentItems,
		totalPages,
		paginate,
	}
}
