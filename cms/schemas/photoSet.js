export default {
  name: 'photo',
  type: 'document',
  fields: [
    {
      name: 'location',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'src',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
}
