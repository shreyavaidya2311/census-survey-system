import json
with open('info.txt') as f:
    json_data = json.load(f)
    print(json_data)
    print(json_data["name"])