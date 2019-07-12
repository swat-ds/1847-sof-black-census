# Clean male occupation compensation data from 1847 census data
# Alice Huang, 7/12/19

import csv

def main():
  # init vars
  list = []
  empty = '. . . . . . . . . . .'

  with open('OccTable1Data.csv') as f:
      reader = csv.reader(f, delimiter=',')
      for row in reader:
          clear = False
          id = row[0]
          occ = row[1]
          if occ == empty: # check for empty row
              clear = True

          cleanOcc = ''
          cleanOcc2 = ''

          if not clear: # only do this if not empty row
              for i in range(len(occ)): # take out periods
                  if occ[i].isalpha() or occ[i] == ' ':
                      cleanOcc += occ[i]

              if cleanOcc[0] != ' ': # only add the first char if not a space (otherwise extra space at beginning)
                  cleanOcc2 += cleanOcc[0]
              for i in range(1, len(cleanOcc)): # split each row into approp num of different occupations
                  if cleanOcc[i].isalpha():
                      cleanOcc2 += cleanOcc[i]
                  else:
                      if cleanOcc[i-1] == ' ': # if previous char was space
                          if cleanOcc2 != '': # if this new occ is not empty
                              list.append([id, cleanOcc2]) # one entry in cleaned csv
                              cleanOcc2 = ''
                      else:
                          cleanOcc2 += ' '
          else:
              list.append([id, 'null'])

      # loop through list and attach count to each occupation
      for arr in list:
          

  with open('CleanOccTable1.csv', 'w') as f:
      writer = csv.writer(f, delimiter=',')
      writer.writerows(list)


main()
