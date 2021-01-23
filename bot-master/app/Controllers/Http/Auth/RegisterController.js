'use strict'
const User  = use('App/Models/User')

class RegisterController {
    async register({request, session, response,view}){
        // console.log(request.all())
        // const validation = await validate(request.all(),{
        //     username: 'required|unique:users,username',
        //     email: 'required|email|unique:users,email',
        //     password: 'required',
        // })
        // let err= "Sorry, username or email is already in use!"
        // console.log(validation.fails())
        // if(validation.fails()){
        //     return view.render('auth.register',{err:err})
        // }

        const newuser = new User()

            newuser.username= "test"
            newuser.email= "test@example.com"
            newuser.password= "123456"

        await newuser.save()
        
        return "ok"
        // response.redirect('/login')

  

    }
}

module.exports = RegisterController
