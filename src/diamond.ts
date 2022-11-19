exports.printDiamond = (inputChar: string): void => {
    if (!inputChar || inputChar.length !== 1 || !inputChar.match(/[a-zA-Z]/)) {
        console.log('Invalid input.');
        return;
    }

    if (inputChar === 'A' || inputChar === 'a') {
        console.log(inputChar);
        return;
    }

    // 65-90 = A-Z
    // 97-122 = a-z
    const inputCharCode: number = inputChar.charCodeAt(0);
    const aCode: number = inputCharCode >= 97 ? 97 : 65;    // upperCase ? A = 65 : a = 97
    let curCharCode: number = aCode;
    let resultArr: string[] = [];

    // Render till input character is rendered.
    while (curCharCode <= inputCharCode) {
        const spaceGapCount: number = Math.max(0, (curCharCode - aCode) * 2 - 1); // 0 when character is A
        const edgeSpaceCount: number = inputCharCode - curCharCode;
        const curChar = String.fromCharCode(curCharCode);

        resultArr.push(`${'_'.repeat(edgeSpaceCount)}${curChar}${'_'.repeat(spaceGapCount)}${spaceGapCount !== 0 ? curChar : ''}${'_'.repeat(edgeSpaceCount)}`);
        curCharCode++;
    }

    resultArr = resultArr.concat(resultArr.slice(0, resultArr.length - 1).reverse());
    console.log(resultArr.join('\n'));
};