f = open("tags_from_tiktok.txt", 'r')

data = f.read()

lst = data.split('\n')

tmp = []
for line in lst:
	if line == '':
		continue

	line = line.strip()

	if not (line in tmp):
		tmp.append(line)

f.close()

f = open("tags_from_tiktok.txt", 'w')
for line in tmp:
	f.write(line + '\n')
f.close()