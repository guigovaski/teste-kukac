export function getPalindromesHelper(first: string, last: string) {
    const palindromesArr = [];

    for (let i = +first; i <= +last; i++) {
        let reverseStr = i.toString().split('')
            .reverse().join('');
        
        if (i === +reverseStr) {
            palindromesArr.push(i);
        }
    }

    return palindromesArr ?? null;
}

export function getPurchaseInfosHelper(total: number, payment: number) {
    const change = +payment - +total;

    const hundredChange = Math.floor(change / 100);
    const tenChange = Math.floor((change % 100) / 10);
    const unitChange = Math.floor(((change % 100) % 10) / 1);

    return {
        total,
        payment,
        change,
        hundredChange,
        tenChange,
        unitChange
    }
}
