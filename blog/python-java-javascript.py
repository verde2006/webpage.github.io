Classes and Object-oriented programming: examples from Python, Java and Javascript.

Among the most important programming paradigms is the object-oriented programming. Object oriented is 
based on the idea of using 'objects' to build different applications. We can think of an object as a 
container that contains attributes and methods that make a certain type of data useful. Using object-
oriented programming can make it much easier for application developers and programmers to build, extend, 
update and maintain programs and applications.

<p>Classes as the bluprint to build objects</p>

The core concept in object-oriented programming is classes. classes are the blueprint or set of instructions
to build an object. Each object is built from a class. A single class is built to perform only one thing
and therefore a program or application contains several classes that accomplish each a specific task.

<p>Classes in python</p>

Compared with other programming languages, Python’s class mechanism adds classes with a minimum of new 
syntax and semantics.

To define a class in Python, the syntax is the following

class classname:
	<statement 1>
	.
	.
	.
	<statement 2>
	
The code above defines a class called classname without including any statement in it.

The statements included in a class are mainly of two types, variables and methods. A variable is a place
where we store a piece of data. To add a variable inside our class we can use the usual syntax adopted in
Python to define a variable.

class classname:
	x = 20
	
In our class above we define a variable x which assumes the value 20. It is posssible to access the
variable x by typing classname.x and the compiler would return the value 20

We can also add a function inside a class, in which case the function takes the name of <i>method</i>. The
syntax for adding a function inside a class in Python is also similar to the usual syntax for functions
in Python however with an additional keyword, 'self'. First let's make an example:

class classname:
	x = 20
	
	def Hello(self):
		return 'Hello World'

To access the function Hello, we can type classname. Hello and the result will be 'Hello World'.
You can notice that the function Hello takes as argument the keyword self. To understand the importance of
the self keyword, we have to understand the conceptof class <i>instance</i> and <i>instantiation</i>. 
An instance of a class is a specific object built from a specific class. An instance is assigned to a 
reference variable that is used to access all of the instance's properties and methods. When we create a 
new instance the process is called instantiation. The keyword self is simply used when defining a method
in order to refer to the specific instance being construced from one class.

For example (considering the above class):

First = classname()

creates a new instance of the class and assigns this object to the local variable First.

Until now, we have talked about constructing standard instances of our class without any difference in the
content of each instance(all instances will have the variable x and the function Hello). However, 
in real applications we are interested in creating instances of a class each having customized attributes.
For example, we can think of a class as a person who can be female or male, can have an age, height and so
on. Here comes the role of <i>class constructor</i>. 
A class constructor is a special function (method) added to a class in order to allow for customizing our
class instances based on a set of parameters. In Python, the class constructor takes the name of __init__.

For example,
class classname(parameter1,parameter2,...)

	def __init__(self,parameter1,parameter2):
		self.var1 = self.parameter1
		self.var2 = self.parameter2
		self.data = []
		x = 10

In the example above, the function __init__ will take whatever we pass as parameters in classname and assign
them respectively to var1 and var2. We will also have an empty list called data and a variable x that will be shared
automatically by all instances. The correct design of a class should include all the variables inside the
__init__ function. It should be noticed that, contrary to some otherlanguages like Java, Python does not
allow for multiple constructors with different signitures (parameters) within a class. Using multiple
constructors could be useful whenever we want to creates instances for which not all parameters are available
. To overcome this problem , we can use a default value for the parameters such that if they result 
available for the instance being created we replace the default values with the parameter values, otherwise
the parameters assumes the default value. For esample, we can define a class as follows:

class length():
    def __init__(self, initialLength = 0):
        self.initialLength = initialLength
        
or 

class length():
    def __init__(self, initialLength = None):
        self.initialLength = initialLength
        
In the above examples, if we call the class by not givigin any value to the parameter initialLength, the
created instance will have a value for initialLength equal to 0 (first example) or None (second example).

To acccess the assigned values we can always use the notation instancename.variablename, for example:

First = classname(10,20)

First.var1
10 

It is possible to define methods inside a class that act on variables created by the class constructor,


class classname(parameter1,parameter2)

	def __init__(self,parameter1,parameter2):
		self.var1 = self.parameter1
		self.var2 = self.parameter2
		self.tricks = []
		x = 10
		
    def add_trick(self, trick):
        self.tricks.append(trick)		

X = classname(10,20)
X.add_trick(20) #this will add the value 20 to the list names trickes defined for the instance X.

Other examples,

class classname:
     def __init__(self):
         self.items = [] # this defines a list called items

     def isEmpty(self):
         return self.items == [] # returns true if items is an empty list

     def push(self, item):
         self.items.append(item) # appends item to items

     def pop(self):
         return self.items.pop() # removes and returns last object from the list.

     def peek(self):
         return self.items[len(self.items)-1] # returns the element before the last one

     def size(self):
         return len(self.items) # returns the length of items


Methods may call other methods by using method attributes of the self argument:

class classname :

def __init__(self,x):
	self.x = x
	self.items = []

def	add_number(self,x):
	self.items.append(x)
	
def add_twice(self,y):
	self.add_number(y)
	
	
Inheritance	

An important feature of classes is inheritance. Inheritance is used when we want to create a subclass of a class that has the
same features of the parent class with some additional attributes.For example, we can create the following
class for persons:

class Person(name,sport):

    def __init__(self, name, Favoritesport):
        self.name = name
        self.Favoritesport = Favoritesport

    def getName(self):
        return self.name

    def getSport(self):
        return self.Favoritesport

    def __str__(self):
        return "%s is a %s" % (self.name, self.Favoritesport)
        

Imagine now that we want to see whether a person perfers swimming as sport and in addition whether they like
to swim in the sea.To not and to do this we create a new 
class that takes the same attributes as the Person class plus the additional attribute related to swimming.


class SeaSwimmers(Person):#the argument is a class

    def __init__(self, name,swim_at_sea):
        Person.__init__(self, name, "Swimming") # this inherits all attributes defined in the parent class
        self.swim_at_sea = swim_at_sea # this is a new attribute that s

    def SeaSwim(self):
        return self.swim_at_sea

To create instance of the class Person and the subclass SeaSwimmers:        

x = Person("Tom","Swimming")
y = SeaSwimmers("Tom",True)


Iterators in classes

In some cases you might notice that a class contains methods called _iter_ and next(). The reason for these
functions is to add an iterator behavior to the class. For example, the following class includes an iterator
for looping over a sequence (provided as a parameter to the class) backwards.

class Reverse:
    def __init__(self, data):
        self.data = data
        self.index = len(data)

    def __iter__(self):
        return self

    def next(self):
        if self.index == 0:
            raise StopIteration
        self.index = self.index - 1
        return self.data[self.index]


x = Reverse([1,2,3])
x.next()
3
x.next()
2
x.next()
1

To read more about iterators in Python check <a href="https://docs.python.org/2/tutorial/classes.html">here</a>

<br>
<br>

Classes in Java

Among the most important features of the Java programming language is the tendency to declare everything
in terms of classes or, in other terms, it drives the use of Object-Oriented Programming. 

Generally, to define a class in Java you need the following instructions

1- Declare the class name preceded with the keyword public

2- Declare the variables that will be used in the class constructor and their type. In Java ther are
usually called fields. Fields can have inital values or not (for examples we can have a fields like 
"public static int length = 10" or simply public static int length. In some cases programmers prefer
to use private instead of public for fields.

3- Create the class constructor which must take the same name as the name of the class. Notice that, unlike
Python, with Java you can create multiple constructors for a class.

4- Create all the necessary methods. Pay attention to the use of the keyword void when creating a method,
where if the methods returns something it should not be used.

5- Instances are created inside the "main" method in Java. In Java , the instantiation of a class is 
typically done using the "new" keyword which does not exist in Python.

To read more about the basics of Java you can visit my  <a href="https://github.com/TamerKhraisha/BasicsofJava.github.io">Github page</a>
and you can also check the  <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html"> official Java tutorial<a>


Next we provide an example of a class called Car. 

public class Car {     // declare a public class called Car

    int modelYear;     // declare the parameter and it's type to be used in the constructor

    public Car(int year) {    //the constructor

        modelYear = year;     // set the field modelYeay to year

    }

    public void startEngine() {      // this is a method
        System.out.println("Vroom!");   // this prints "Vroom" if the method is called
    }

    public void drive(int distanceInMiles) {   // Another method

        System.out.println("Miles driven: " + distanceInMiles);

    }

    public static void main(String[] args){ // everything inside this function is exectuted

        Car myFastCar = new Car(2007);  // class instantiation
        myFastCar.startEngine();        // This prints "Vroom"
        myFastCar.drive(1628);         // this prints "Miles driven: 1628".

    }
 }


<br>

Inheritance in Java

Similar to Python, it is possible for one class to share or inherit behavior from another class. This is
done by using the keyword "extends" in Java. For example, the class for Car defined above could be 
considered a subclass of Veichle, since cars are a type of veichles.

public class Vehicle {

    public void checkBatteryStatus() {

        System.out.println("The battery is fully charged and ready to go!");

    }
}


public class Car extends Vehicle { // Car extends (inherits) from Veichle

    int modelYear;   // define everything as we did before for car

    public Car(int year) {

        modelYear = year;

    }

    //Other methods omitted for brevity...
    //Now we will have automatically the method checkBatteryStatus() inherited from Veichle.

    public static void main(String[] args){

        Car myFastCar = new Car(2007)
        myFastCar.checkBatteryStatus();

    }
}


Classes in Javascript

JavaScript is a among the most flexible object-oriented language when it comes to syntax. Interestingly, 
when defining a class in Javascript we are using the standard Javascript functions to simulate classes,
since Javascript does not have a specific syntax for classes like Python or Java. It is also possible
to create and instantiate classes in Javascript using different ways. In this post, I am going to concentrate
on the the use of functions and prototype to create and manipulates classes.

To begin, let's start with the following example:

 function Person(name,age) {
  this.name = name;
  this.age = age;
}

with the above code, we create a class called Person that takes as arguments name and age. To create an 
instance of Person, we use the new prefix in Javascript,

var bob = new Person("Bob Smith", 30); // This creates a class of Person called bob

bob.name // this returns the name of bob
bob.age // this returns the age of bob

How to add a method to our class Person ? Imagine we want to add a method to Person that tells the person
to say "Hello". Here's one way to do it

var bob = new Person("Bob Smith", 30); 

bob.SayHello = function() {
  console.log("Woof");
};
bob.SayHello(); // this is to test that the method works

Or if we realize that we forgot to add the nationality to bob, we can type the following:

bob.nationality = "English";

So far so easy. However, in most cases we want to add a new method or attribute not to an instance (like
bob) of our class but to the class itself such that all the newly created instances will share the same 
method or attribute. Here comes the role of 'prototype' in Javascript. It works as follows:

Person.prototype.nationality = "English";

Person.prototype.SayHello = function() {
  console.log("Woof");
};

see more <a href="https://www.w3schools.com/js/js_object_prototypes.asp">here</a>

<br>
<br>

Inheritance in Javascript

For a class to inherit from another class in Javascript we can use prototype. For example, suppose we 
want to create an animal class that takes two parameters, name and number of legs. Additionally, we 
define a method for Animal class that tells returns the name of the animal.


function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.Beautiful = "Yes"
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

Now suppose we want to create another class that is specific for penguins and takes also as arguments 
name and the number of legs and we want it to have the same method for printing the name as in Animal. 
Here instead of repeating all the code for Animal again, we can first set the number of legs to 2, and we
left with the parameter name. In addition, if we type 'NewClass.prototype. = new ParentClass", then the
compiler will automatically import all the attributes and methods defined in the parent class and include
them in the new class that inherits from it. Notice that whatever we pass as parameter in the subclass 
will still depend on what we pass as value to that class, for example in the Penguin class below we still
have 'name' as an argument and therefore any instance of Penguin will have the name attribute equal to 
the value the we pass inside Penguin. On the other hand, the attribute 'Beautiful' that was defined in 
the Animal constructor will be automaticallt inherited by Penguin because we didn't include it as a 
parameter in the Penguin class.

// define a Penguin class

function Penguin(name){
    this.name = name
    this.numLegs = 2
}

Penguin.prototype = new Animal()

Penguin.sayName() \\ this will print the name 
Penguin.Beautiful \\ this will print yes.

To learn more about Javascript , visit my Github webpage where I have a tutorial to learn the basics of
Javascript.

