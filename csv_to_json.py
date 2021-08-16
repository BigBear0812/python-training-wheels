import csv
import json
import sys
import os


def convert(infile=None, folder=None):
    outfile_path = os.path.join(folder, 'dst_out.json')

    # Read in the [label, data] pairs to the converted for import
    data_pairs = {}
    with open(infile, newline='') as csvfile:
        reader = csv.reader(csvfile)
        try:
            for row in reader:
                data_pairs[row[0]] = row[1]
        except csv.Error as e:
            sys.exit('file {}, line {}: {}'.format(infile, reader.line_num, e))

    # Strip off the title row 'title, value'
    del(data_pairs['title'])

    # Create a new structure (a list of dicts) which is evidently needed for the correct importing of the
    # resulting JSON file.
    out_list = []
    for k, v in data_pairs.items():
        temp_dict = {"title": k, "value": v}
        out_list.append(temp_dict)

    # Write out the list of dicts to a JSON formatted file
    with open(outfile_path, 'w') as outfile:
        json.dump(out_list, outfile, indent=1)
    print(f"JSON file {outfile_path} was written successfully")
    return outfile_path

# Test code, comment out when done debugging
# convert('./sample_data.csv')
