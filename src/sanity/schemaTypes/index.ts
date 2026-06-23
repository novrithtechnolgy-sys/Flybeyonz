import { type SchemaTypeDefinition } from 'sanity'
import whyChooseUs from './whyChooseUs'
import tourPackage from './tourPackage'
import experience from './experience'
import destination from './destination'
import accommodationCategory from './accommodationCategory'
import testimonial from './testimonial'
import whyFlybeyonzCard from './whyFlybeyonz'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [whyChooseUs, tourPackage, experience, destination, accommodationCategory, testimonial, whyFlybeyonzCard],
}
