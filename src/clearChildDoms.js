function clearChildDoms(parentDom) {
    const childDoms = parentDom.querySelectorAll(':scope > *')
    childDoms.forEach((child) => child.remove());

}

export {clearChildDoms};