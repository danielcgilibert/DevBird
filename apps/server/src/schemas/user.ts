import z from 'zod'

const userSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  firstName: z
    .string({
      invalid_type_error: 'User firstName must be a string'
    })
    .optional(),
  lastName: z
    .string({
      invalid_type_error: 'User lastName must be a string'
    })
    .optional(),
  username: z
    .string({
      invalid_type_error: 'User username must be a string'
    })
    .min(1, { message: 'This field has to be filled.' })
})

export function validateUser(input: unknown) {
  return userSchema.safeParse(input)
}

export function validatePartialUser(input: unknown) {
  return userSchema.partial().safeParse(input)
}
