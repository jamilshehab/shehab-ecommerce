export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'fullName',
      type: 'string',
    },
    {
      name: 'phone',
      type: 'string',
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'id', type: 'string'},
            {name: 'title', type: 'string'},
            {name: 'price', type: 'number'},
            {name: 'quantity', type: 'number'},
            {name: 'image', type: 'string'},
          ],
        },
      ],
    },
    {
      name: 'total',
      type: 'number',
    },
    {
      name: 'status',
      type: 'string',
      options: {
        list: ['pending', 'processing', 'delivered'],
      },
      initialValue: 'pending',
    },
    {
      name: 'createdAt',
      type: 'datetime',
    },
  ],
}
