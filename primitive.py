# print("=========")
# # in JAVA, variable is a name storage location!
# # in Python, variable is named reference!

# count = 100 
# count_type = type(count)
# # print("count:", count, count_type)
# print(f"the count: {count} and type: {count_type}")

# result1 = count.bit_count()  # method
# result2 = count.numerator  # state
# print(result1, result2)

# print("======== string =========")
# # METHODS: upper() lowe() title() find() replace()

# course = "AI Python FullStack"
# result = type(course)
# print(f"the type of course (1): {result}")

# result = course.title()
# print(f"the result (2): {result}")

# result = course.upper()
# print(f"the result (3): {result}")

# result = course.replace("FullStack", "MasterClass")
# print(f"the result (4): {result}")
# print(course)

print("======== boolean =========")
# functions > type() input() bool() int() str()
y = input("Give your value for y:")
print("y:", y)

result = y.isnumeric()
print(f"the input value is numeric: {result}")

# TRUTHY vs FALSY value
# TRUTHY: True 100, -100, "MIT" ==> true qiymatini qaytaradi
# FALSY:  False 0, ""  None  ===>. false qiymatlarini qaytaradi

test_falsy = "" or False or None or 0 
print("The test_falsy:", bool(test_falsy))


test_truthy = "MIT" 
print("test_turthy:", bool(test_truthy))