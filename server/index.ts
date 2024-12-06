import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from '@trpc/server/adapters/standalone';


const appRouter = router({
    userList: publicProcedure.query(() => {
        console.log("This is the user list")
    })
})


const server = createHTTPServer({
    router: appRouter,
  });
   
  server.listen(3000);


export type AppRouter = typeof appRouter