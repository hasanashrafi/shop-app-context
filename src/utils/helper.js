const shortestTitle = (title) => {
    const shortTitle = title.split(' ').slice(0, 18).join(' ');
    return shortTitle
}

export { shortestTitle }