'''CLASS deep diving
    (1) ENCAPSULATION
    (2) INHERITENCE <
    (3) POLIMORPHISM <
'''

print("========= INHERITENCE ======")
# PARENT > CHILD only (public & protected properties(state + metjod) to childern!)-bollariga shularni bera oladi


class Animal:  # Parent
    # state
    description = "This class is parent for animals"

    # constructor

    def __init__(self, voice):
        self._status = "animal is alive"
        self.voice = voice

    # method
    def make_voice(self):
        print(f"the animal can make voice: {self.voice}")


class Dog(Animal):
    # state

    # constructor
    def __init__(self, name, sound, voice):
        self.name = name
        self.sound = sound
        super().__init__(voice)

    # method
    def introduce(self):
        print(f"{self.name} says: {self.sound}-{self.sound}")

    def protect(self):
        print("Yes, I can protect you!")


class Cat(Animal):
    # state

    # constructor
    def __init__(self, name, sound, voice):
        self.name = name
        self.sound = sound
        super().__init__(voice)

    # method
    def introduce(self):
        print(f"{self.name} says: {self.sound}-{self.sound}")

    def play(self):
        print("Yes, I am play with you")


class Fish(Animal):

    # state

    # constructor
    def __init__(self, name, sound, voice):
        self.name = name
        self.sound = sound
        super().__init__(voice)

    # method
    def introduce(self):
        print(f"{self.name} says: {self.sound}-{self.sound}")

    def protect(self):
        print("Yes, I can swim!")


dog = Dog("Rex", "wow", True)
cat = Cat("Tom", "myeow", True)
fish = Fish('Nemo', "ZzZ", False)

dog.introduce()
cat.introduce()
fish.introduce()

print('--------')
dog.make_voice()
fish.make_voice()

print("-------")
print(Animal.description)
print(Dog.description)

print(dog.voice, fish.voice)
print("status:", dog._status)
print("status:", cat._status)
