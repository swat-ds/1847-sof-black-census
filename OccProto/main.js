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
  var table = d3.select('#chart4').append('table')
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
	  .append('tr')
  data = data 
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
  .append("p")
    .attr("class", "SearchBar")
    .text("Search By Name:");

d3.select(".SearchBar")
  .append("input")
    .attr("class", "SearchBar")
    .attr("id", "search")
    .attr("type", "text")
    .attr("placeholder", "Search...");

    d3.select("#search")
      .on("keyup", function() { // filter according to key pressed
        var searched_data = data,
            text = this.value.trim();

        var searchResults = searched_data.map(function(r) {
          var regex = new RegExp("^" + text + ".*", "i");
          if (regex.test(r.title)) { // if there are any results
            return regex.exec(r.title)[0]; // return them to searchResults
          }
        })

	    // filter blank entries from searchResults
        searchResults = searchResults.filter(function(r){
          return r != undefined;
        })

        // filter dataset with searchResults
        searched_data = searchResults.map(function(r) {
           return data.filter(function(p) {
            return p.title.indexOf(r) != -1;
          })
        })

        // flatten array
		searched_data = [].concat.apply([], searched_data)

        // data bind with new data
		rows = table.select("tbody").selectAll("tr")
		  .data(searched_data, function(d){ return d.id; })

        // enter the rows
        rows.enter()
         .append("tr");

        // enter td's in each row
        row_entries = rows.selectAll("td")
            .data(function(d) {
              var arr = [];
              for (var k in d) {
                if (d.hasOwnProperty(k)) {
		          arr.push(d[k]);
                }
              }
              return [arr[3],arr[1],arr[2],arr[0]];
            })
          .enter()
            .append("td")

        // draw row entries with no anchor
        row_entries_no_anchor = row_entries.filter(function(d) {
          return (/https?:\/\//.test(d) == false)
        })
        row_entries_no_anchor.text(function(d) { return d; })

        // draw row entries with anchor
        row_entries_with_anchor = row_entries.filter(function(d) {
          return (/https?:\/\//.test(d) == true)
        })
        row_entries_with_anchor
          .append("a")
          .attr("href", function(d) { return d; })
          .attr("target", "_blank")
        .text(function(d) { return d; })

        // exit
        rows.exit().remove();
      })
