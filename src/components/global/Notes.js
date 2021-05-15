const NOTES = ['c', 'df', 'd', 'ef', 'e', 'f', 'gf', 'g', 'af', 'a', 'bf', 'b', 'c', ]

const KEY_T0_NOTE = { 
    z: 'c',
    s: 'df',
    x: 'd',
    d: 'ef',
    c: 'e',
    v: 'f',
    g: 'gf',
    b: 'g',
    h: 'af',
    n: 'a',
    j: 'bf',
    m: 'c'
}

const NOTE_TO_KEY = {
    c: 'z', 
    df: 's', 
    d: 'x', 
    ef: 'd', 
    e: 'c', 
    f: 'v', 
    gf: 'g', 
    g: 'b',  
    af: 'h',  
    a: 'n',  
    bf: 'j',  
    b: 'm'  
}

export { NOTES, NOTE_TO_KEY, KEY_T0_NOTE };