'use strict'

class RegisterController {

    async registerBot({view,auth,response,request}){
        console.log("TESt")
        console.log(request.body)
        response.status(200)
    }

}

module.exports = RegisterController
