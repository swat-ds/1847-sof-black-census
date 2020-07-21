/* Searchable data table for all clean 1847 census data

Alice Huang, July 2019*/

// add data table
var tabulate = function (data,columns) {
  var table = d3.select('#chart4').append('table').attr('id','myTable')
  var caption = table.append('caption', 'Clean 1847 Census Data') // accessibility
	var thead = table.append('thead')
	var tbody = table.append('tbody')

	thead.append('tr')
	  .selectAll('th')
	    .data(columns) // add table headers
	    .enter()
	  .append('th').attr('scope','col') // accessibility
	    .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data) // add rows
	    .enter()
	  .append('tr').attr('scope','row')
    .on('mouseover', function() {
      const r = d3.select(this);
      r.style('background-color','#dc3545').style('color','white');
    }).on('mouseout', function() {
      const r = d3.select(this);
      r.style('background-color','white').style('color','black');
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

// load csv file, set headers of table to column names
d3.csv('Data/allClean.csv').then(function (data) {
	var columns = ['HOUSEHOLD ID','LAST NAME','FIRST NAME','RESIDENCE STREET NUMBER',
  'RESIDENCE STREET NAME','MALE OCCUPATION 1', 'MALE COUNT 1','MALE OCCUPATION 2','MALE COUNT 2','MALE OCCUPATION 3',
  'MALE COUNT 3','MALE OCCUPATION 4','MALE COUNT 4','FEMALE OCCUPATION 1', 'FEMALE COUNT 1','FEMALE OCCUPATION 2','FEMALE COUNT 2','FEMALE OCCUPATION 3',
  'FEMALE COUNT 3','MALES INTEMPERATE','FEMALES INTEMPERATE','CAN READ','CAN WRITE','BORN SLAVES',
  'BOUGHT FREEDOM','ATTEND RELIGIOUS MEETINGS','NOT ATTEND RELIGIOUS MEETINGS','BELONG TO TEMPERANCE SOCIETIES',
  'REGION']
  tabulate(data,columns)
})

let selection = 'ID', col = 0;

// event listener for column selection drop down - tells search function which column to search by
d3.select('#search-container select').on('change', function() {
  selection = d3.select(this).property('value'); // get drop-down selection
  if (selection == 'ID') {
    col = 0;
  } else if (selection == 'Last Name') {
    col = 1;
  } else if (selection == 'First Name') {
    col = 2;
  } else if (selection == 'Residence Street') {
    col = 4;
  } else if (selection == 'Male Occupation 1') {
    col = 5;
  } else if (selection == 'Female Occupation 1') {
    col = 13;
  } else {
    col = 28;
  }

  d3.select('#myInput').attr("placeholder", "Search by " + selection)
})

// add search bar
d3.select("#table-container").append("div")
  .attr("class", "SearchBar")
  .append("input")
    .attr("id", "myInput")
    .attr("class", "form-control")
    .attr("aria-label", "Search")
    .attr("type", "text")
    .attr("placeholder", "Search by ID")
    .attr('onkeyup','search(col)')

// search function for filtering table data 
function search(col) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  th = table.getElementsByTagName('th');

  for (i = 0; i < th.length; i++) {
    th[i].style.background = 'white';
    th[i].style.color = 'black';
  }

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[col];
    tr[i].style.background = 'white';
    tr[i].style.color = 'black';
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
  // highlight column being searched
  th[col].style.background = '#dc3545';
  th[col].style.color = 'white';
}
