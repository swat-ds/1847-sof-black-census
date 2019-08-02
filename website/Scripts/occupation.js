/* Visualizations for 1847 Census Occupation Data
Alice Huang, 7/17/19 */

// bar chart for cumulative occ data, only showing shared occs btwn male/female (viz 1)
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
          'MALE': '#8856a7',
          'FEMALE': '#9ebcda'
      } // colors from color brewer
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

/*************************************************************/

// bar chart 2, categorized occupations

let chart3,
    currCategory = 'ag';

// agricultural category loaded initially
drawCategoryChart(' Data/m_ag.csv', 'Agricultural Pursuits')

function drawCategoryChart(file, category) {
  chart3 = c3.generate({
      bindto: '#chart3',
      data: {
        url: file,
        x: category,
        type: 'bar',
        colors: {
          'MALE': '#8856a7',
          'FEMALE': '#9ebcda'
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
          height: 180,
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
        position: 'inset'
      },
      point: {
        r: 4
      }
  });

}

// reload graph with different file
function reload(file) {
  setTimeout(function() {
      chart3.load({
        unload: true,
        url: file,
      });
  }, 300);
}

// event listener for dropdown category menu
d3.select('.input-group select').on('change', function() {
  item = d3.select(this).property('value'); // get drop-down selection
  if(item == 'mto') {
    drawCategoryChart(' Data/m_mto.csv', 'More than One') // redraw chart with new file
    currCategory = 'mto' // update the category selected
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

// graph title, which updates when dropdown changes 
d3.select('#title').append('text')
   .attr('class','label')
   .attr('text-anchor','end')
   .attr('font-size','14px')
   .text('Agricultural Pursuits Occupations')
