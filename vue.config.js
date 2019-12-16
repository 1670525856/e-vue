module.exports = {
    configureWebpack:{
        devtool:'source-map'
    },
    devServer:{
        before:function(app){
            app.get('/api/getList',function (req,res) {
                res.json({name:'asdas'})
                
            })
        }
    }
    
}