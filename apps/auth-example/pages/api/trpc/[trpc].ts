import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from "@boundless-sample/api";

console.log({ appRouter })

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
