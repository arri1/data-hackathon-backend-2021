const {Generator} = require('@paljs/generator')
new Generator(
    {
        name: 'sdl', schemaPath: './prisma/schema.prisma'
    },
    {
        javaScript: true, models: ['Registor']
    }
).run();
