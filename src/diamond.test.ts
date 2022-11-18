const diamond = require('./diamond');

describe('Diamond Kamta', () => {
    const spyConsole = jest.spyOn(console, 'log');

    it('output should be A if input character is A', () => {
        diamond.printDiamond('A');
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('A');
    });

    it('output should be a if input character is a', () => {
        diamond.printDiamond('a');
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('A');
    });
    
    it('input charter in upper case should be the midpoint of the diamond', () => {
        diamond.printDiamond('C');
        expect(spyConsole).toHaveBeenCalledTimes(7);
        expect(spyConsole).toHaveBeenCalledWith([
            '   A . ',
            '  B B  ',
            ' C.  C ',
            '  B B  ',
            '   A   ',
        ]);
    });

    it('input charter in lower case should be the midpoint of the diamond', () => {
        diamond.printDiamond('C');
        expect(spyConsole).toHaveBeenCalledTimes(7);
        expect(spyConsole).toHaveBeenCalledWith([
            '   a . ',
            '  b b  ',
            ' c.  c ',
            '  b b  ',
            '   a   ',
        ]);
    });
    
    it('should render error message if input has more than one character', () => {
        diamond.printDiamond('ABC');
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('Invalid input.'); 
    });
    
    it('should render error message if input is empty', () => {
        diamond.printDiamond('');
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('Invalid input.');    
    });
    
    it('should render error message if input is not alphabet', () => {
        diamond.printDiamond('1');
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('Invalid input.');
    });
});
