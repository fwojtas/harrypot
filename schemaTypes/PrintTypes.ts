import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'
import { DoorsOpenInput } from './components/DoorsOpenInput'

export const PrintType = defineType({
    name: 'print',
    title: 'print',
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