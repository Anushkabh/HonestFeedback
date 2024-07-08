import { z } from "zod";

export const acceptMessageSchema = z.object({
    acceptMessages: z.boolean(),
});

//we do this to have extra validation