var React = require('react')
var Tabs = require('tabs.react')
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo" >
                <Tabs>default</Tabs>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
