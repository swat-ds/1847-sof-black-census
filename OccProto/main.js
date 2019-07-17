/* Prototype for 1847 Census Occupation Data
Alice Huang, 7/17/19 */

var chart = c3.generate({
    bindto: '#chart',
    data: {
      url: 'testdata.csv',
      x: 'OCC',
      type: 'bar',
      groups: [
        ['MALE', 'FEMALE']
      ],
      colors: {
          MALE: '#12cadb',
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
      height: 1000
      // width: 3000
    }
});

var chart = c3.generate({
    bindto: '#chart2',
    data: {
      url: 'testdata2.csv',
      x: 'OCCUPATION',
      type: 'scatter',
      colors: {
          ID: 'red'
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
      height: 1000,
      width: 6000
    }
});
