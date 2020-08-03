all_tags = open('result.txt', 'r', encoding='utf-8')

data = all_tags.read().strip().split('\n')
data = data[:-217]

insta_map = dict()

for line in data:
	if line == '':
		continue

	tag, index = line.split(',')
	insta_map[tag] = index

tiktok_map = dict()

tiktok_file = open("tags_from_tiktok.txt", 'r', encoding='utf-8')

tiktok_tags = tiktok_file.read().strip().split('\n')

cnt = 1
for tag in tiktok_tags:
	try:
		ind = insta_map[tag]
	except Exception:
		data.append(tag + ',100000000')
		pass
	tiktok_map[tag] = cnt
	cnt += 1

cnt2 = 1

output_file = open("inserts.txt", 'w', encoding='utf-8');
for tag in data:
	tag, _ = tag.split(',')
	x = ''

	try:
		x = tiktok_map[tag]
	except Exception:
		x = cnt
		cnt += 1

	try:
		output_file.write("INSERT INTO tag (tag, instagramid, tiktokid) VALUES('" + tag + "'," + str(insta_map[tag]) + ',' + str(x) + ");\n")
	except Exception:
		output_file.write("INSERT INTO tag (tag, instagramid, tiktokid) VALUES('" + tag + "'," + str(10000 - 217 + cnt2) + ',' + str(x) + ");\n")
		cnt2 += 1
output_file.close()
