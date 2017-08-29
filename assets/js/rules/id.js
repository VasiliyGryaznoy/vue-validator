import minLength from './items/minLength';
import maxLength from './items/maxLength';
import nthIsANumber from './items/nthIsANumber';
import nthIsALetter from './items/nthIsALetter';
import nthIs from './items/nthIs';
// import nthIsA from './items/nthIsA';

export default {
  'minLength': {
    rule: minLength,
    select: {
      label: 'Minimum amount of characters',
      removeWhenSelect: true
    },
    fields: [
      {
        name: 'minLength',
        label: 'Minimum amount of characters',
        required: true
      }
    ]
  },
  'maxLength': {
    rule: maxLength,
    select: {
      label: 'Maximum amount of characters',
      removeWhenSelect: true
    },
    fields: [
      {
        name: 'maxLength',
        label: 'Maximum amount of characters',
        required: true
      }
    ]
  },

  'nthIsANumber': {
    rule: nthIsANumber,
    select: {
      label: 'The n-th character is always a number',
    },
    fields: [
      {
        name: 'position',
        label: 'Symbol position',
        required: true
      }
    ]
  },
  'nthIsALetter': {
    rule: nthIsALetter,
    select: {
      label: 'The n-th character is always a letter',
    },
    fields: [
      {
        name: 'position',
        label: 'Symbol position',
        required: true
      }
    ]
  },
  'nthIs': {
    select: {
      label: 'N-th symbol is ...',
    },
    rule: nthIs,
    fields: [
      {
        name: 'position',
        label: 'Symbol position',
        required: true
      },
      {
        name: 'symbol',
        label: 'Symbol',
        required: true
      }
    ]
  },

 /* 'nthIsA': {
    rule: nthIsA,
    select: {
      label: 'The n-th character is always the A',
    },
    fields: [
      {
        name: 'position',
        label: 'Symbol position',
        required: true
      }
    ]
  },*/
}