export default {
  name: 'timeline',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'show',
      type: 'boolean',
      title: 'Show date on timeline',
      validation: Rule => Rule.required(),
    },
  ],
}
