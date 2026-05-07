# I-TASK (PYTHON)

# Shunday function tuzing, unga string argument pass bolsin. 
# Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
# MASALAN: get_digits("m14i1t") return qiladi "141"

# Masalaning yechimi:

def get_digits(text):
    digits = []

    for char in text:
        if char.isdigit():
            digits.append(char)

    return "".join(digits)

print(get_digits("m14i1t"))

print("===========")
# G-TASK (PYTHON)

# Shunday function tuzingki unga integerlardan iborat array pass 
# bolsin va function bizga osha arrayning eng katta qiymatiga tegishli 
# birinchi indexni qaytarsin.
# MASALAN: get_highest_index([5, 21, 12, 21, 8]) return qiladi 1 sonini.

# Masalani yechimi

# def get_highest_index(nums):
#       return nums.index(max(nums))

# result = get_highest_index([5, 21, 12, 21, 8])
# print("result:", result) 
