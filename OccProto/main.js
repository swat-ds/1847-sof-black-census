/* Prototype for 1847 Census Occupation Data
Alice Huang, 7/17/19 */

var chart = c3.generate({
    bindto: '#chart',
    data: {
      url: 'testdata.csv',
      x: 'OCC',

      types: {
          MALE: 'area',
          FEMALE: 'area'
      },
      colors: {
          MALE: 'yellow',
          FEMALE: 'red'
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 60,
          multiline: false
        }
      }
    },
    size: {
      height: 800,
      width: 3000
    }
});
