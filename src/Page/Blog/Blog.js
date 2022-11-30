import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='w-4/6 mx-auto text-left py-10'>
            <h2 className='font-bold mb-4'>1. What are the different ways to manage a state in a React application?</h2>
            <p><span className='text-bold text-green-600'>Ans:</span> There are four main types of state you need to properly manage in your React apps. Local state, Global state, Server state, URL state.
                <br />
                Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it. useState is the first tool you should reach for to manage state in your components. It can take accept any valid data value, including primitive and object values.
                <br />
                Server state or Cache state: The kind of data that is remotely persisted, asynchronous with shared ownership that can be potentially Out of Date.
                An important technique to maintain state. It is used to store identity and information; information is stored in the server using Sessionid. To start the user session - Example.
                <br />
                URL state Data that exists on our URLs, including the pathname and query parameters.
                URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
            </p>
            <br />

            <h2 className='font-bold mb-4'>2. How does prototypical inheritance work?</h2>
            <p><span className='text-bold text-green-600'>Ans:</span> The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. Note: The property of an object that points to its prototype is not called prototype .
            <br />
            The most important difference between class- and prototype-based inheritance is that a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance.
            </p>
            <br />

            <h2 className='font-bold mb-4'>3. What is a unit test? Why should we write unit tests?</h2>
            <p> <span className='text-bold text-green-600'>Ans:</span> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. <br /> <br />
            Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
            </p>
            <br />

            <h2 className='font-bold mb-4'>4. React vs. Angular vs. Vue?</h2>
            <p><span className='text-bold text-green-600'>Ans:</span> It's easier to learn Vue than angular and it reasonably takes the same amount of time and effort as learning react. Although some people argue that it's even easier to learn than react but that's of course subjective and varies from person to person. <br /> <br />
            Angular is better than React if your application is enterprise-grade and you need to incorporate complex functionalities like progressive, single-page, and native web apps. However, React specializes in creating UI components and can be used in any application, including single-page apps.</p>

        </div>
    );
};

export default Blog;