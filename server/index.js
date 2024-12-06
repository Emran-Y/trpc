"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const standalone_1 = require("@trpc/server/adapters/standalone");
const appRouter = (0, trpc_1.router)({
    userList: trpc_1.publicProcedure.query(() => {
        console.log("This is the user list");
    })
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
});
server.listen(3000);
