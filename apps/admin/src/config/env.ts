import * as z from 'zod';

const createEnv = () => {
  const envSchema = z.object({
    API_URL: z.string(),
    MODE: z.enum(['development', 'production', 'test']),
    ENABLE_MOCK: z
      .string()
      .optional()
      .refine((e) => e === 'true' || e === 'false')
      .default('false'),
  });

  // Get environment variables from process.env for Next.js
  const envVars = {
    API_URL: process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || '',
    MODE: process.env.NODE_ENV || 'development',
    ENABLE_MOCK: process.env.NEXT_PUBLIC_ENABLE_MOCK || process.env.ENABLE_MOCK || 'false',
  };

  const parsedEnv = envSchema.safeParse(envVars);
  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided.
    The following variables are missing or invalid:
    ${Object.entries(parsedEnv.error.flatten().fieldErrors)
      .map(([k, v]) => `- ${k}: ${v.join(', ')}`)
      .join('\n')}
    `,
    );
  }
  return parsedEnv.data ?? {};
};

export const env = createEnv();
