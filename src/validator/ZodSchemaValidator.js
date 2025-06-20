import { z } from "zod";

export const tweetZodSchemas = z.object({
  body: z.string().min(1).max(150),
});
