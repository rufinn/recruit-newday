const diamond = require('./diamond');

describe('Diamond Kamta', () => {
    const spyConsole = jest.spyOn(console, 'log');
    beforeEach(() => {
        spyConsole.mockClear();
    });

    it('output should be A if input character is A', () => {
        diamond.printDiamond('A');
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('A');
    });

    it('output should be a if input character is a', () => {
        diamond.printDiamond('a');
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('a');
    });
    
    it('input charter in upper case should be the midpoint of the diamond', () => {
        diamond.printDiamond('C');
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith(
            `__A__\n_B_B_\nC___C\n_B_B_\n__A__`
        );
    });

    it('input charter in lower case should be the midpoint of the diamond', () => {
        diamond.printDiamond('c');
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith(
            `__a__\n_b_b_\nc___c\n_b_b_\n__a__`
        );
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

    it('should render error message if input is a number', () => {
        diamond.printDiamond(1);
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('Invalid input.');
    });

    it('should render error message if input is NULL', () => {
        diamond.printDiamond(null);
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('Invalid input.');
    });

    it('should render error message if input is undefined', () => {
        diamond.printDiamond(undefined);
        expect(spyConsole).toHaveBeenCalledTimes(1);
        expect(spyConsole).toHaveBeenCalledWith('Invalid input.');
    });
});
