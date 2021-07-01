const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 'ld1vjcgw',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

