'use strict'

class RegisterController {

    async registerBot({view,auth,response,request}){
        console.log("TESt")
        console.log(request.body)
        response.status(200)
    }

    async show({view,auth,response,request}){
        console.log("TESt")
        console.log(request.body)

        return view.render("c2.register")
    }

}

module.exports = RegisterController
