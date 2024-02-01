export function clickOutside(node: Node, ignoreNode: Node | null = null): { destroy(): void } {
	const handleClick = (event: Event) => {
		if (
			node &&
			!node.contains(event.target as Node) &&
			!event.defaultPrevented &&
			ignoreNode &&
			!ignoreNode.contains(event.target as Node)
		) {
			node.dispatchEvent(new CustomEvent('clickOut', { detail: node })); // detail ile node'u iletebilirsiniz
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
