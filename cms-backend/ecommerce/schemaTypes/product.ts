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

    // 🖼️ Main Image (IMPORTANT)
    {
      name: 'image',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },

    // 🖼️ Gallery Images (OPTIONAL)
    {
      name: 'images',
      type: 'array',
      title: 'Gallery Images',
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
      to: [{type: 'category'}],
    },

    // ⭐ Featured product
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Product',
      initialValue: false,
    },

    // 🆕 New product flag
    {
      name: 'isNew',
      type: 'boolean',
      title: 'New Product',
      initialValue: false,
    },

    // Gift Products
    {
      name: 'isGift',
      type: 'boolean',
      title: 'Gift Product',
      initialValue: false,
    },
  ],
}
