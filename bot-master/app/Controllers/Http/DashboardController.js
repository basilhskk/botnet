'use strict'

class DashboardController {
    
    async show({view,auth,response}){
        try {
            const user = await auth.getUser()
            // return response.route('/')
            return view.render('dashboard')
          } catch (error) {
            return view.render('dashboard')
        }
    }





}

module.exports = DashboardController
