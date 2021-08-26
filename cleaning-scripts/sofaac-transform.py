# -*- coding: utf-8 -*-
import csv

file_in = '../dist/sofaac-normalized.csv'
file_out = '../dist/sofaac-normalized.csv'

def load_csv():
    out_rows = []
    with open(file_in,'r') as f:
        rows = csv.reader(f)
        i = 0
        out_rows.append(rows.__next__())
        for row in rows:
            # row.insert(0,"{:04d}".format(i))
            row[0] = "{:04d}".format(i)
            i+=1
            out_rows.append(row)

    with open(file_out,'w') as f:
        out_csv = csv.writer(f)
        out_csv.writerows(out_rows)
        




'''
Main
'''
def main():
    load_csv()

if __name__ == '__main__':

    # if len(argv) > 1: print('Please enter a Google Sheet ID')
    main()