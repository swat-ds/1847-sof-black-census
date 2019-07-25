/* Prototype for 1847 Census Occupation Data
Alice Huang, 7/17/19 */

// bar chart for cumulative occ data, only showing shared occs btwn male/female
var chart = c3.generate({
    bindto: '#chart',
    data: {
      url: 'data/top_common_jobs.csv',
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
        height: 100,
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

/**********************************************************************/
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
    currCategory = 'p';

/**********************************************************************/
// prototype 3, bar chart by occupation categories
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
          height: 100,
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
          max: 500
        }
      },
      legend: {
        position: 'inset'
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

// switch between male/female data on clicking buttons
d3.select('#p-filter-f button').on('click', function() {
  reload('data/f_' + currCategory + '.csv')
})

d3.select('#p-filter-m button').on('click', function() {
  reload('data/m_' + currCategory + '.csv')
})

// update data loaded for each dropdown selection
d3.select('#cat-filter select').on('change', function() {
  item = d3.select(this).property('value'); // get drop-down selection
  if(item == 'd') {
    drawCategoryChart('data/m_d.csv', 'DOMESTIC')
    currCategory = 'd'
    d3.select('#title').text('Domestic Jobs')
  } else if (item == 's') {
    drawCategoryChart('data/m_s.csv', 'SKILLED_TRADES')
    currCategory = 's'
    d3.select('#title').text('Skilled Trades Jobs')
  } else if (item == 'u') {
    drawCategoryChart('data/m_u.csv', 'UNSKILLED_LABOR')
    currCategory = 'u'
    d3.select('#title').text('Unskilled Labor Jobs')
  } else if (item == 'm') {
    drawCategoryChart('data/m_m.csv', 'MISCELLANEOUS')
    currCategory = 'm'
    d3.select('#title').text('Miscellaneous Jobs')
  } else {
    drawCategoryChart('data/m_p.csv', 'PUBLIC_SERVICE')
    currCategory = 'p'
    d3.select('#title').text('Public Service Jobs')
  }
})

// add updating title to prototype 3 bar chart
d3.select('#title').append('text')
   .attr('class','label')
   .attr('text-anchor','end')
   .attr('font-size','14px')
   .text('Public Service Jobs')

/**********************************************************************/
// add data table

let data;

var tabulate = function (data,columns) {
  var table = d3.select('#chart4').append('table').attr('id','myTable')
	var thead = table.append('thead')
	var tbody = table.append('tbody')

	thead.append('tr')
	  .selectAll('th')
	    .data(columns)
	    .enter()
	  .append('th')
	    .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
	  .append('tr').on('click', function() {
      const r = d3.select(this);
      r.style('background-color','#f6f0ff');
    })

	var cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })

  return table;
}

d3.csv('data/top_common_jobs.csv').then(function (data) {
	var columns = ['OCC','MALE','FEMALE']
  tabulate(data,columns)
})

// add search bar
d3.select("#chart4").append("div")
  .attr("class", "SearchBar")
  .append("input")
    .attr("class", "SearchBar")
    .attr("id", "myInput")
    .attr("type", "text")
    .attr("placeholder", "Search by Name")
    .attr('onkeyup','search()')

function search() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        //tr[i].style.background = '#f6f0ff';
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
