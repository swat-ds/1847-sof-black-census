/* Prototype for 1847 Census Occupation Data
Alice Huang, 7/17/19 */

// bar chart for cumulative occ data, only showing shared occs btwn male/female
var chart = c3.generate({
    bindto: '#chart',
    data: {
      url: 'Data/top_common_jobs.csv',
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
          rotate: 45,
          multiline: false
        },
        height: 110,
        label: {
          text: 'Occupation',
          position: 'outer-center'
        }
      },
      y: {
        label: {
          text: 'Frequency',
          position: 'outer-middle'
        },
        max: 2000
      }
    },
    legend: {
      position: 'inset'
    }
});

// scatter plot for male occ data
var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
      url: ' Data/testdata3.csv',
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
        url: ' Data/testdata4.csv', // load from second csv file
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
        url: ' Data/testdata3.csv',
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
        url: ' Data/testdata3.csv',
        colors: {
          'MALE': '#12cadb',
        }
      });
    }, 300);
  } else {
    setTimeout(function() {
      chart2.load({
        url: ' Data/testdata4.csv',
        colors: {
          'FEMALE': 'red',
        }
      });
    }, 300);
  }
})

let chart3,
    currCategory = 'la';

drawCategoryChart(' Data/m_la.csv', 'Laborer')

function drawCategoryChart(file, category) {
  chart3 = c3.generate({
      bindto: '#chart3',
      data: {
        url: file,
        x: category,
        type: 'scatter',
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
            rotate: 45,
            multiline: false
          },
          height: 160,
          label: {
            text: 'Occupation',
            position: 'outer-center'
          }
        },
        y: {
          label: {
            text: 'Frequency',
            position: 'outer-middle'
          },
          // max: 2000
        }
      },
      legend: {
        position: 'right'
      },
      point: {
        r: 4
      }
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
  reload(' Data/f_' + currCategory + '.csv')
})

d3.select('#p-filter-m button').on('click', function() {
  reload(' Data/m_' + currCategory + '.csv')
})

d3.select('#cat-filter select').on('change', function() {
  item = d3.select(this).property('value'); // get drop-down selection
  if(item == 'mto') {
    drawCategoryChart(' Data/m_mto.csv', 'More than One')
    currCategory = 'mto'
    d3.select('#title').text('More than One Occupation')
  } else if (item == 'dp') {
    drawCategoryChart(' Data/m_dp.csv', 'Domestic & Personal Service')
    currCategory = 'dp'
    d3.select('#title').text('Domestic & Personal Service Occupations')
  } else if (item == 'ag') {
    drawCategoryChart(' Data/m_ag.csv', 'Agricultural Pursuits')
    currCategory = 'ag'
    d3.select('#title').text('Agricultural Pursuits Occupations')
  } else if (item == 'ma') {
    drawCategoryChart(' Data/m_ma.csv', 'Manufacturing & Mechanical Pursuits')
    currCategory = 'ma'
    d3.select('#title').text('Manufacturing & Mechanical Pursuits Occupations')
  } else if (item == 'niw') {
    drawCategoryChart(' Data/m_niw.csv', 'Not in Work')
    currCategory = 'niw'
    d3.select('#title').text('Not in Work "Occupations"')
  } else if (item == 'ps') {
    drawCategoryChart(' Data/m_ps.csv', 'Professional Service')
    currCategory = 'ps'
    d3.select('#title').text('Professional Service Occupations')
  } else if (item == 'tr') {
    drawCategoryChart(' Data/m_tr.csv', 'Trade & Transportation')
    currCategory = 'tr'
    d3.select('#title').text('Trade & Transportation Occupations')
  } else {
    drawCategoryChart(' Data/m_la.csv', 'Laborer')
    currCategory = 'la'
    d3.select('#title').text('Laborer Occupations')
  }
})

d3.select('#title').append('text')
   .attr('class','label')
   .attr('text-anchor','end')
   .attr('font-size','14px')
   .text('Laborer Occupations')
