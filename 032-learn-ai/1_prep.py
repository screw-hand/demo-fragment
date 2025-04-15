with open("input.txt", "r", encoding="utf-8") as file:
  text = file.read()

print('Part 1:', len(text))
print('\n===\n')
print(text[:1000])
