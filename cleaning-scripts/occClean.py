# Clean male occupation compensation data from 1847 census data
# Alice Huang, 7/12/19

import csv

def main():
  # init vars
  list = []
  empty = '. . . . . . . . . . .'
  empty2 = '. . . . . . . .'

  with open('OccTable2Data.csv') as f:
      reader = csv.reader(f, delimiter=',')
      for row in reader:

          clear = False
          clear2 = False
          id = row[0]
          occ = row[1]
          count = row[2]

          if occ == empty: # check for empty row
              clear = True

          if count == empty2: # check for empty count row
              clear2 = True

          cleanOcc = ''
          cleanOcc2 = ''
          cleanCount = ''
          countEntry = ''

          if not clear: # only do this if not empty row
              for i in range(len(occ)): # take out periods
                  if occ[i].isalpha() or occ[i] == ' ':
                      cleanOcc += occ[i]
              if not clear2:
                  for i in range(len(count)):
                      if count[i] != '.' and count[i] != ' ':
                          cleanCount += count[i]

              if cleanOcc[0] != ' ': # only add the first char if not a space (otherwise extra space at beginning)
                  cleanOcc2 += cleanOcc[0]
              for i in range(1, len(cleanOcc)): # split each row into approp num of different occupations
                  if cleanOcc[i].isalpha():
                      cleanOcc2 += cleanOcc[i]
                  else:
                      if cleanOcc[i-1] == ' ': # if previous char was space
                          if cleanOcc2 != '': # if this new occ is not empty

                              if not clear2:
                                  if cleanCount == '': # handles if more occ entries than count entries in row
                                      countEntry = '1'
                                  else:
                                      countEntry = cleanCount[0] # get the first count number
                              else:
                                  countEntry = '1' # no count for occ assumed to be count of 1

                              list.append([id, cleanOcc2, countEntry]) # one entry in cleaned csv

                              cleanOcc2 = ''
                              if not clear2:
                                  cleanCount = cleanCount[1:] # slice off the first count number

                      else:
                          cleanOcc2 += ' '
          else:
              list.append([id, 'null', 'null'])


  with open('femaleOccupation.csv', 'w') as f:
      writer = csv.writer(f, delimiter=',')
      writer.writerows([['ID', 'OCCUPATION', 'COUNT']]) # add headers
      writer.writerows(list)


main()
