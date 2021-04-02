'use strict'
const c2  = use('App/Models/C2')

class DashboardController {

    async show({auth,view,response}){

        let c2s = await c2.all()
        c2s = c2s.toJSON()

        let rows = []
        // split in 4 items per row
        let counter = 0;
        let rowData = []
        
        c2s.forEach((server)=>{
            rowData.push(server)
            
            if (counter >2){
                rows.push({"servers":rowData})
                rowData = []
            }

            counter ++
        })

        if (rows.length == 0 ){
            rows.push({"servers":c2s})
        }
            
        return view.render("c2.dashboard",{rows:rows})
    }

}

module.exports = DashboardController
