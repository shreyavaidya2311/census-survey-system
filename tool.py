import json
import datetime

with open('info.txt') as f:
    json_data = json.load(f)
    #print(json_data)
    print(json_data["name"])
    

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

print("Running test case for name")
if valname() == True:
    print("Test case passed for Name.")
else:
    print("Test case failed for Name.")

print("Running test case for phone number")
if valphoneno() == True:
    print("Test case passed for Phone Number.")
else:
    print("Test case failed for Phone Number.")
   
print("Running test case for Aadhar Number")
if valaadharno() == True:
    print("Test case passed for Aadhar Number.")
else:
    print("Test case failed for Aadhar Number.")

print("Running test case for Age")
if valage() == True:
    print("Test case passed for Age.")
else:
    print("Test case failed for Age.")

print("Running test case for number of members in family")
if valfamilyno() == True:
    print("Test case passed for number of members in family.")
else:
    print("Test case failed for number of members in family.")

print("Running test case for Annual Income.")
if valincome() == True:
    print("Test case passed for Annual Income.")
else:
    print("Test case failed for Annual Income.")

print("Running test case for Date Of Birth.")
if valdob() == True:
    print("Test case passed for Date Of Birth.")
else:
    print("Test case failed for Date Of Birth.")

print("Running test case for Occupation.")
if valoccupation() == True:
    print("Test case passed for Occupation.")
else:
    print("Test case failed for Occupation.")

print("Running test case for Hereditary Diseases.")
if valdiseases() == True:
    print("Test case passed for Hereditary Diseases.")
else:
    print("Test case failed for Hereditary Diseases.")


