/* Prototype for 1847 Census Occupation Data
Alice Huang, 7/17/19 */

// bar chart for cumulative occ data, only showing shared occs btwn male/female
var chart = c3.generate({
    bindto: '#chart',
    data: {
      url: 'data/testdata.csv',
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
      url: 'data/testdata3.csv',
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

// event listeners for chart 2 scatter plot - filter data by sex

let current = '';

d3.select('#female-filter button').on('click', function() {
  current = 'female' // remember the last-clicked button for both filtering
  setTimeout(function() {
      chart2.load({
        unload: true, // on click, clear the loaded data and load new data
        url: 'data/testdata4.csv', // load from second csv file
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
        url: 'data/testdata3.csv',
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
        url: 'data/testdata3.csv',
        colors: {
          'MALE': '#12cadb',
        }
      });
    }, 300);
  } else {
    setTimeout(function() {
      chart2.load({
        url: 'data/testdata4.csv',
        colors: {
          'FEMALE': 'red',
        }
      });
    }, 300);
  }
})

let chart3,
    currCategory;

drawCategoryChart('data/m_p.csv', 'PUBLIC_SERVICE')

function drawCategoryChart(file, category) {
  chart3 = c3.generate({
      bindto: '#chart3',
      data: {
        url: file,
        x: category,
        type: 'bar',
        colors: {
          'MALE': '#12cadb',
          'FEMALE': 'red'
        }
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
          label: 'Frequency',
        }
      },
      size: {
        height: 500,
        width: window.innerWidth/2
      },
  });

}

function reload(file) {
  setTimeout(function() {
      chart3.load({
        unload: true,
        url: file,
      });
  }, 300);
}

d3.select('#p-filter-f button').on('click', function() {
  reload('data/f_' + currCategory + '.csv')
})

d3.select('#p-filter-m button').on('click', function() {
  reload('data/m_' + currCategory + '.csv')
})

d3.select('#cat-filter select').on('change', function() {
  item = d3.select(this).property('value'); // get drop-down selection
  if(item == 'd') {
    drawCategoryChart('data/m_d.csv', 'DOMESTIC')
    currCategory = 'd'
  } else if (item == 's') {
    drawCategoryChart('data/m_s.csv', 'SKILLED_TRADES')
    currCategory = 's'
  } else if (item == 'u') {
    drawCategoryChart('data/m_u.csv', 'UNSKILLED_LABOR')
    currCategory = 'u'
  } else if (item == 'm') {
    drawCategoryChart('data/m_m.csv', 'MISCELLANEOUS')
    currCategory = 'm'
  } else {
    drawCategoryChart('data/m_p.csv', 'PUBLIC_SERVICE')
    currCategory = 'p'
  }
})
