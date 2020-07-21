# Put all occ data into 1 table with 1 id/row - 1847 census data
# Alice Huang, 7/25/19

import csv

def main():
  # init vars
  file = []
  list = []
  count = 0

  with open('MALE_OCC_DATA.csv') as f:
      reader = csv.reader(f, delimiter=',')
      for row in reader:
          file.append(row)
      list.append(['HOUSEHOLD ID','OCCUPATION 1', 'COUNT', 'OCCUPATION 2', 'COUNT', 'OCCUPATION 3', 'COUNT', 'OCCUPATION 4', 'COUNT'])
      list.append(file[1])
      for i in range(2, len(file)):
          if file[i-1][0] == file[i][0]:
              list[-1].append(file[i][1]) # add additional occ
              list[-1].append(file[i][2]) # add count
          else:
              list.append(file[i]) # add new row


  with open('maleFinal.csv', 'w') as f:
      writer = csv.writer(f, delimiter=',')
      #writer.writerows([['OCCUPATION', 'MALE']]) # add headers
      writer.writerows(list)

main()
