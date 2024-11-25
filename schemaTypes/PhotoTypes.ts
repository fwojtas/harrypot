import { defineField, defineType } from 'sanity'

export const PhotoType = defineType({
    name: 'Picture',
    title: 'Picture',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'Picture',
            type: 'image',
        }),
        defineField({
            name: 'description',
            type: 'string',
            validation: Rule => Rule.required()
        })
    ],
})