function rot13(str) {
    const letters = {
        a: 'n',
        b: 'o',
        c: 'p',
        d: 'q',
        e: 'r',
        f: 's',
        g: 't',
        h: 'u',
        i: 'v',
        j: 'w',
        k: 'x',
        l: 'y',
        m: 'z',
        n: 'a',
        o: 'b',
        p: 'c',
        q: 'd',
        r: 'e',
        s: 'f',
        t: 'g',
        u: 'h',
        v: 'i',
        w: 'j',
        x: 'k',
        y: 'l',
        z: 'm',
    }
    const toArray = str.toLowerCase().split('');

    return toArray.map(letter => {
        if (!letters[letter]) {
            return letter
        }
        return letters[letter]
    }).join('').toUpperCase()


}

rot13("SERR PBQR PNZC");