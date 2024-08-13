package com.janani;

public class Person {

	 private String name;
	    private int age;

	   
	    public Person(String name, int age) {
	        this.name = name;
	        this.age = age;
	    }

	   
	    public void printDetails() {
	        System.out.println("Name: " + name);
	        System.out.println("Age: " + age);
	    }
	
	    public static void main(String[] args) {
	       
	        Person person1 = new Person("Gokul", age:25);
	        Person person2 = new Person("Janani", age:21);
 
	        System.out.println("Details of Person 1:");
	        person1.printDetails();
	        System.out.println();

	        System.out.println("Details of Person 2:");
	        person2.printDetails();
	    }
	}