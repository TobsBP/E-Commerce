export const formatCategoryName = (category: string) => {
	if (category === 'calcas') return 'Calças'
	if (category === 'camisas') return 'Camisas'
	return category.charAt(0).toUpperCase() + category.slice(1)
}
