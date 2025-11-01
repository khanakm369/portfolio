import express from 'express'
import mongoose from "mongoose"

const userSchema = new mongoose.Schema (
    {
        name : {
            type : String,
            required: true
        },
        email : {
            type : String,
            required: true
        },
          experience: {
            type: String,
        required: true,
        },
        skillLevel: {
            type: String,
            required: true,
        },
        portfolioLink: {
            type: String,
        },
        preferredTest: {
            type: String,
        },
});

const User = mongoose.model("user" , userSchema)

export default User;