const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    username: { 
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([a-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address!']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        
    },
    id: false
}
);


 // friend count///
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});



//create the User model using UserSchema 
const User = model('User', UserSchema);

//export the User model
module.exports = User;