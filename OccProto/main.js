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
        },
        label: 'Occupation'
      },
      y: {
        label: 'Frequency'
      }
    },
    size: {
      height: 500
    }
});

// scatter plot for male occ data
var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
      url: 'testdata3.csv',
      x: 'OCCUPATION',
      type: 'scatter',
      colors: {
        'MALE': '#12cadb'
      },
      name: 'maledata'
    },
    transition: {
      duration: 2000
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 60,
          multiline: false
        },
        label: 'Occupation'
      },
      y: {
        max: 4500,
        label: 'ID'
      }
    },
    size: {
      height: 500,
    },
    point: {
      r: 3
    }
});

let current = '';

d3.select('#female-filter button').on('click', function() {
  current = 'female'
  setTimeout(function() {
      chart2.load({
        unload: true,
        url: 'testdata4.csv',
        colors: {
          'FEMALE': 'red'
        }
      });
  }, 300);
})

d3.select('#male-filter button').on('click', function() {
  current = 'male'
  setTimeout(function() {
      chart2.load({
        unload: true,
        url: 'testdata3.csv',
        colors: {
          'MALE': '#12cadb'
        }
      });
  }, 300);
})

d3.select('#both-filter button').on('click', function() {
  if (current == 'female'){
    setTimeout(function() {
      chart2.load({
        url: 'testdata3.csv',
        colors: {
          'MALE': '#12cadb',
        }
      });
    }, 300);
  } else {
    setTimeout(function() {
      chart2.load({
        url: 'testdata4.csv',
        colors: {
          'FEMALE': 'red',
        }
      });
    }, 300);
  }
})

// scatter plot for female occ data
// var chart3 = c3.generate({
//     bindto: '#chart3',
//     data: {
//       url: 'testdata4.csv',
//       x: 'OCCUPATION2',
//       type: 'scatter',
//       colors: {
//         'FEMALE': 'red'
//       }
//     },
//     axis: {
//       x: {
//         type: 'category',
//         tick: {
//           rotate: 60,
//           multiline: false
//         },
//         label: 'Occupation'
//       },
//       y: {
//         max: 4500,
//         label: 'ID'
//       }
//     },
//     size: {
//       height: 500,
//     },
//     point: {
//       r: 3
//     }
// });
