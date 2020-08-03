from_ = 1
to_ = 999901
# to_ = 1
output_file = open("result.txt", "w")
for i in range(from_, to_ + 1, 100):
    input_file = open(str(i) + ".txt", "r")
    data = input_file.read()

    ind =  0
    for j in range(100):
        ind = data.find("class=\"i-tag\"", ind)
        data = data[ind+1:]
        x = data.find("#")
        y = data.find("<", x)
        tag = data[x + 1:y]
        data = data[y:]
        output_file.write(tag + "," + str(i + j) + '\to_')
    input_file.close()
output_file.close()
