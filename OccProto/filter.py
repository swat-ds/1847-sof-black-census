# Further clean occupation data from 1847 census data
# Alice Huang, 7/18/19

import csv

def main():
  # init vars
  listM = []
  listF = []
  male = []
  male2 = []
  female = []
  female2 = []
  matches = []

  with open('testdata2.csv') as f:
      reader = csv.reader(f, delimiter=',')
      for row in reader:
          # put data into 3 arrays
          male.append([row[0].strip(),row[1].strip()])
          female.append([row[2].strip(),row[3].strip()])
          if row[4] != '':
              matches.append(row[4].strip())

  # loop through male array
  for i in range(len(male)):
      for j in range(len(matches)):
          if male[i][0] == matches[j]:
              male2.append(male[i])

  # loop through female array
  for entry in female:
      if entry[0] in matches:
          female2.append(entry)

  # combine male/female into one writeable file
  # for i in range(len(female2)):
  #     if i < 1980:
  #         list.append([male2[i][0],male2[i][1],female2[i][0],female2[i][1]])
  #     else:
  #         list.append(['','',female2[i][0],female2[i][1]])
  for i in range(len(male2)):
      listM.append([male2[i][0],male2[i][1]])
  for i in range(len(female2)):
      listF.append([female2[i][0],female2[i][1]])

  with open('testdata3.csv', 'w') as f:
      writer = csv.writer(f, delimiter=',')
      writer.writerows([['OCCUPATION', 'MALE']]) # add headers
      writer.writerows(listM)

  with open('testdata4.csv', 'w') as f1:
      writer = csv.writer(f1, delimiter=',')
      writer.writerows([['OCCUPATION2', 'FEMALE']]) # add headers
      writer.writerows(listF)



main()
