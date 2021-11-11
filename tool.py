import json
import datetime
from termcolor import colored

with open('info.txt') as f:
    json_data = json.load(f)
    

def valname():
    if json_data["name"].replace(" ", "").isalpha():
        return True
    else:
        return False

def valphoneno():
    temp = int(json_data["phoneno"])
    a_string = str(temp)
    length = len(a_string)
    if type(temp) == int and length == 10:
        return True
    else:
        return False
    
def valaadharno():
    temp = int(json_data["aadharno"])
    b_string = str(temp)
    length = len(b_string)
    if type(temp) == int and length == 12:
        return True
    else:
        return False

def valage():
    temp = int(json_data["age"])
    if type(temp) == int and temp <= 125:
        return True
    else:
        return False

def valdob():
    date_string = json_data["dob"][0:10]
    format = "%Y-%m-%d"
    try:
        datetime.datetime.strptime(date_string, format)
        return True
    except ValueError:
        return False

def valfamilyno():
    temp = int(json_data["familyno"])
    if type(temp) == int and temp <= 170:
        return True
    else:
        return False
    
def valincome():
    temp = int(json_data["income"])
    if type(temp) == int:
        return True
    else:
        return False
    
def valoccupation():
    if type(json_data["occupation"]) == str and json_data["occupation"].replace(" ", "").isalpha():
        return True
    else:
        return False

def valdiseases():
    if type(json_data["diseases"]) == str and json_data["diseases"].replace(" ", "").isalpha():
        return True
    else:
        return False
passed = 0
failed = 0
print("Running Test Case for Name")
if valname() == True:
    print(colored('Test Case passed for Name', 'green'))
    passed += 1
    print()
else:
    print(colored('Test Case failed for Name', 'red'))
    failed += 1
    print()

print("Running Test Case for Phone Number")
if valphoneno() == True:
    print(colored('Test Case passed for Phone Number', 'green'))
    passed += 1
    print()
else:
    print(colored('Test Case failed for Phone Number', 'red'))
    failed += 1
    print()
   
print("Running Test Case for Aadhar Number")
if valaadharno() == True:
    print(colored('Test Case passed for Aadhar Number', 'green'))
    passed += 1
    print()
else:
    print(colored('Test Case failed for Aadhar Number', 'red'))
    failed += 1
    print()

print("Running Test Case for Age")
if valage() == True:
    print(colored('Test Case passed for Age', 'green'))
    passed += 1
    print()
else:
    print(colored('Test Case failed for Age', 'red'))
    failed += 1
    print()

print("Running Test Case for number of members in family")
if valfamilyno() == True:
    print(colored('Test Case passed for number of members in family', 'green'))
    passed += 1
    print()
else:
    print(colored('Test Case failed for number of members in family', 'red'))
    failed += 1
    print()

print("Running Test Case for Annual Income")
if valincome() == True:
    print(colored('Test Case passed for Annual Income', 'green'))
    passed += 1
    print()
else:
    print(colored('Test Case failed for Annual Income', 'red'))
    failed += 1
    print()

print("Running Test Case for Date Of Birth")
if valdob() == True:
    print(colored('Test Case passed for Date Of Birth', 'green'))
    passed += 1
    print()
else:
    print(colored('Test Case failed for Date Of Birth', 'red'))
    failed += 1
    print()

print("Running Test Case for Occupation")
if valoccupation() == True:
    print(colored('Test Case passed for Occupation', 'green'))
    passed += 1
    print()
else:
    print(colored('Test Case failed for Occupation', 'red'))
    failed += 1
    print()

print("Running Test Case for Hereditary Diseases")
if valdiseases() == True:
    print(colored('Test Case passed for Hereditary Diseases', 'green'))
    passed += 1
    print()
else:
    print(colored('Test Case failed for Hereditary Diseases', 'red'))
    failed += 1
    print()

print("Tests: ", colored('{} passed'.format(passed), 'green'), colored('{} failed'.format(failed), 'red'))
