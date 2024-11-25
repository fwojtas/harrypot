import { defineField, defineType } from 'sanity'

export const BlogType = defineType({
    name: 'blog',
    title: 'blogPost',
    type: 'document',
    fields: [
        defineField({
            name: 'Entry Title',
            type: 'string',
        }),
        defineField({
            name: 'post',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'Picture',
            type: 'image',
        }),
    ],
})