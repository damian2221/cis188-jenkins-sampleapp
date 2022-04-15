isAuthenticated = require("../backend/middlewares/isAuthenticated")

describe("Backend session authentication middleware", () => {
    test("it should error out if username is not in the session object", () => {
        let nextMockMessage = "";
        const nextMock = errorMessage => {
            nextMockMessage = errorMessage
        }
        isAuthenticated({session: {}}, null, nextMock)
        expect(nextMockMessage).toEqual("You are not authorized!");
    });

    test("it should not error out if username is in the session object", () => {
        let nextMockMessage = "";
        const nextMock = errorMessage => {
            nextMockMessage = errorMessage
        }
        isAuthenticated({
            session: {
                username: "user"
            }
        }, null, nextMock)
        expect(nextMockMessage).toEqual(undefined);
    });
});