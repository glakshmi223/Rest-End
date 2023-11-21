const express = require('express')
const app = express()

const questions = [
    {
        question:"how to install python",
        slug:"how-to-install-python",
        votes:3,
        views:10,
        tags:"python,pip,query"
    },
    {
        question:"how to install c++",
        slug:"how-to-install-c++",
        votes:3,
        views:10,
        tags:"c language,compiler,query"
    },
    {
        question:"how to create react app",
        slug:"how-to-install-react-app",
        votes:3,
        views:10,
        tags:"npm, npx, create"
    }
]

const users = [
    {
        name:"Lakshmi",
        followers:50,
        location:"Hyderabad"
    },

    {
        name:"Ramesh",
        followers:75,
        location:"Vizag"
    },

    {
        name:"Bhava",
        followers:100,
        location:"Warangal"
    },

    {
        name:"Rajesh",
        followers:150,
        location:"Bangalore"
    },
]

const Tags = [
    
    {
        name:"python",
        desc:"A wide range of Python programming courses are available to take for free on Udemy.When something is offered for free, we always expect a catch. Sadly, it's usually the way things work. You'll be tempted in by the prospect of a free giveaway, only to be trapped by something like an automatic renewal or a mailing list"
    },

    {
        name:"Javascript",
        desc:"JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data. JavaScript Quickstart Tutorial. This tutorial will take a quick look at the most important JavaScript data types."
    },

    {
        name:"Mongodb",
        desc:"MongoDB is a document-oriented database that stores data in BSON format, which is a binary representation of JSON. BSON documents are flexible, dynamic, and self-describing, meaning that they can have different fields and structures. A BSON document can contain simple values, such as strings, numbers, booleans, dates, or nulls, as well as complex values, such as arrays, subdocuments, or binary data"
    },
]

const Companies = [
    {
        name:"Dell",
        location:"Bangalore",
        no: 50
    },

    {
        name:"Genpact",
        location:"Hyderabad",
        no: 75
    },

    {
        name:"Syniti",
        location:"Pune",
        no: 100
    },

    {
        name:"Flipkart",
        location:"Mumbai",
        no: 50
    }
]


app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/questions',(req,res)=>{
    res.send(questions)
})

app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug = req.params.slug
    questions.map(obj=>{
        if (obj.slug === slug){
            res.send(obj)
        }
    })
    res.send("Question not found")
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/tags',(req,res)=>{
    res.send(Tags)
})

app.get('/jobs/companies',(req,res)=>{
    res.send(Companies)
})


app.listen(3000,()=>{
    console.log("Listening...")
})