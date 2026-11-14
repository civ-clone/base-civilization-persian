/**
 * The Persian civilization's attributes, as `base-civilization-*` packages have registered theirs: a game's rules
 *  register them (core-civilization's `AttributeRegistry`), as nothing here registers itself.
 *
 * - `people`: what one of them is called, and what is theirs.
 * - `nation`: what they are called together.
 * - `colors`: the first fills a unit's shield and a city's square; the second is the shield's edge and the city.
 */
export const attributes: {
  people: string;
  nation: string;
  colors: string[];
} = {
  people: 'Persian',
  nation: 'Persia',
  colors: ['#9C27B0', '#FFC107'],
};

export default attributes;
