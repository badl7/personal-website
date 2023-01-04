export const truncate = (data: string, size: number) => {
	if (data.length <= size) return data;
	const subString = data.slice(0, size - 1);
	return subString.slice(0, subString.lastIndexOf(' '));
};
