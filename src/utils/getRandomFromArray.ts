

export const getRandom = <T>(arr: unknown[], nrElem: number) => {
    const newArr: unknown[] = [];
    const usedIds: number[] = [];
    for (let i = 0; i < nrElem; i++) {
        const random = Math.floor(Math.random() * (arr.length - 1));
        if (usedIds.includes(random)) {
            i--;
        } else {
            newArr.push(arr[random]);
            usedIds.push(random);
        }
    }
    return newArr as T;
};