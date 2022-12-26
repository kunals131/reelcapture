import {defineType, defineField} from 'sanity'

export default defineType({
    name : 'user',
    title : 'User',
    type : 'document',
    fields : [
        defineField({
            name : 'name',
            title : 'User Name',
            type : 'string'
        }),
        defineField({
            name : 'image',
            title : 'Image',
            type : 'string'
        })
    ]
})