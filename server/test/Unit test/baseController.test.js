import baseController from "../../controller/baseController.js";
import zod from "zod";
import jwt from "jsonwebtoken";

const zodExample = zod.object({
    username: zod.string(),
    type: zod.string()
});

const secretExample = "Bob";


test("verifyToken: JWT token signed with right secret", () => {
    const controller = new baseController(secretExample, null, null);
    const obj = {username: "Bob"};
    const token = jwt.sign(obj, secretExample);
    expect(controller.verifyToken(token)).toHaveProperty("username", "Bob");
})


test("verifyToken: JWT token signed with wrong secret", () => {
    const controller = new baseController(secretExample, null, null);
    const obj = {username: "Bob"};
    const token = jwt.sign(obj, "NotTheSecret");
    expect(() => controller.verifyToken(token)).toThrow(jwt.JsonWebTokenError);
})

test("verifyToken: Not a valid jwt token", () => {
    const controller = new baseController(secretExample, null, null);
    const token = "";
    expect(() => controller.verifyToken(token)).toThrow(zod.ZodError);
})


test("validateDocument(doc): All valid fields doc", () => {
    const controller = new baseController(null, null, zodExample);
    const obj = {username: "Bob"};
    expect(controller.validateDocument(obj)).toEqual({username: "Bob"});
});

test("validateDocument(doc): All invalid fields doc", () => {
    const controller = new baseController(null, null, zodExample);
    const obj = {password: "Lemons"};
    expect(controller.validateDocument(obj)).toEqual({});
});

test("validateDocument(doc): Mix of valid and invalid fields doc", () => {
    const controller = new baseController(null, null, zodExample);
    const obj = {password: "Lemons", username: "Bob", type: "Plant"};
    expect(controller.validateDocument(obj)).toEqual({username: "Bob", type: "Plant"});
});

