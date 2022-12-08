import { router, procedure } from '../trpc';

export const healthRouter = router({
  healthz: procedure.query(() => 'yay!'),
});
