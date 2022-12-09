/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { Prisma } from '@prisma/client';
import { z } from 'zod';

import { prisma } from '../prisma';
import { router, procedure } from '../trpc';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultUserSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  email: true,
  password: false,
  createdAt: true,
  updatedAt: true,
});

export const userRouter = router({
  user: procedure
    .input(
      z.object({
        id: z.string().uuid().optional(),
        email: z.string().email(),
        password: z.string().min(8).max(64),
      }),
    )
    .mutation(async ({ input }) => {
      console.log("mutaion input!!", input);
      const user = await prisma.user.create({
        data: input,
        select: defaultUserSelect,
      });
      console.log('USER', user);
      return user;
    }),
});
