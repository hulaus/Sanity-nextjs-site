import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'sanity-nextjs-site', //Used to differentiate Workspaces. Not Compulsory for single workspace setup
  title: 'Sanity Next.js Site', // Title of Project. Show up in the Studio
  projectId: '0ow48ytt', // Unique ID that points to the Sanity project you're working with
  dataset: 'production', // The name of the dataset to use for your studio
  basePath: "/studio", // The URL Path where the studio will be mounted

  plugins: [deskTool(), visionTool()],

  schema: { //The object where the schema files will be defined
    types: schemaTypes, 
  },
})
