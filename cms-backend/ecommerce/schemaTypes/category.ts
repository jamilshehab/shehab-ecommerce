export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}