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
      name: 'dateTime',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'show',
      type: 'boolean',
      title: 'Show date on timeline',
      validation: Rule => Rule.required(),
    },
    {
      name: 'city',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}
