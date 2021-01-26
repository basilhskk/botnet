'use strict'
const c2  = use('App/Models/C2')
const helper = use('App/Helpers/Helper')
const Helper = new helper() 

class RegisterController {

    async registerC2({response,request}){

        let newC2 = new c2()

        newC2.uid = Helper.sanitizer(request.input('uid'))
        newC2.os = Helper.sanitizer(request.input('os'))
        newC2.hostname = Helper.sanitizer(request.input('hostname'))
        newC2.ip = Helper.sanitizer(request.input('ip'))
        newC2.port = Helper.sanitizer(request.input('port'))

        try {
            
            await newC2.save()

            response.status(200).send("Ok!")

        } catch (error) {

            response.status(400).send("Error!")

        }

    }

}

module.exports = RegisterController
