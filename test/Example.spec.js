import Example from 'Example';

describe("Example", () => {
    it("something is something", () => {
        const example = new Example();
        expect(example.someProperty).to.be.equal('someProperty');
    });
});
