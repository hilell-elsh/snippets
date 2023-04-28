const range = (s, e, j = 1) => {
    if (e == undefined) {
        e = s;
        s = 0;
    }
    return Array.from({length: (e-s)/j}, (_,i) => i * j + s)
}