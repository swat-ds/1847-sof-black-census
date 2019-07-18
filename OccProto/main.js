/* Prototype for 1847 Census Occupation Data
Alice Huang, 7/17/19 */

// bar chart for cumulative occ data, only showing shared occs btwn male/female
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
          'MALE': '#12cadb',
          'FEMALE': 'red'
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
      height: 500
    }
});

// scatter plot for male occ data
var chart = c3.generate({
    bindto: '#chart2',
    data: {
      url: 'testdata3.csv',
      x: 'OCCUPATION',
      type: 'scatter',
      colors: {
        'MALE': '#12cadb'
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 60,
          multiline: false
        }
      },
      y: {
        max: 4500
      }
    },
    size: {
      height: 500,
    }
});

// scatter plot for female occ data 
var chart = c3.generate({
    bindto: '#chart3',
    data: {
      url: 'testdata4.csv',
      x: 'OCCUPATION2',
      type: 'scatter',
      colors: {
        'FEMALE': 'red'
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 60,
          multiline: false
        }
      },
      y: {
        max: 4500
      }
    },
    size: {
      height: 500,
    }
});
