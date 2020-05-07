function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./src/assets/images', '')] = r(item); });
    return images;
}

export const images = importAll(require.context('./', false, /\.(gif|jpe?g|svg)$/));