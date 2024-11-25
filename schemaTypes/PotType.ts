import { defineField, defineType } from 'sanity'

export const PotType = defineType({
    name: 'Item',
    title: 'Item',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'picture_1',
            type: "image",
        }),
        defineField({
            name: 'picture_2',
            type: "image",
        }),
        defineField({
            name: 'picture_3',
            type: "image",
        }),
        defineField({
            name: 'description',
            type: 'string',
        }),
        defineField({
            name: 'price',
            type: 'number',
        })
    ],
})