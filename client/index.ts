import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server";

const trpc = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url: "http://localhost:3000" })],
});

const callTrpc = async () => {
  const res = await trpc.userList.query();
};

callTrpc();
