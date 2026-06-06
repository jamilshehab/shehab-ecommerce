export default {
  name: 'product',
  type: 'document',
  title: 'Product',

  fields: [
    // 🟦 Basic info
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },

    // 💰 Price
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: any) => Rule.required(),
    },

    // 📦 Stock
    {
      name: 'stock',
      type: 'number',
      title: 'Stock',
      initialValue: 0,
    },

    // 🖼️ Images
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },

    // 🗂️ Category relation
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
    },

    // ⭐ Featured product
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Product',
      initialValue: false,
    },

    // 🆕 New product flag (ADDED)
    {
      name: 'isNew',
      type: 'boolean',
      title: 'New Product',
      initialValue: false,
    },
  ],
}