define("singleton", function () {
    var singleton1,
        singleton2;

    beforeEach(function () {
        singleton1 = Singleton.Instance;
    });

    describe("when is initialized", function () {
        it("should not be undefined", function () {
            expect(singleton1).not.toBeUndefined();
        });

        it("should not be null", function () {
            expect(singleton1).not.toBeNull();
        });
    });

    describe("when two instances are initialized", function () {
        it("should be equal", function () {
            singleton2 = Singleton.Instance;
            expect(singleton1).toBe(singleton2);
        });
    });
});