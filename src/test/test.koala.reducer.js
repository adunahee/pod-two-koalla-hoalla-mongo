import setKoalas from '../index';

test('this ought to return an empty array', () => {
    const action = {};
    const returnedState = setKoalas(undefined, action);
    expect(Arra.isArray(returnedState)).toBe(true);
    expect(returnedState.length).toBe(0);
})
