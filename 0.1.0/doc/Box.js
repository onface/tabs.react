var React = require('react')
var Tabs = require('tabs.react')
var Icon = require('icon.react')
var TabPane = Tabs.TabPane
class Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "1"
        }
    }
    render () {
        const self = this
        return (
            <Tabs
                themes="box"
                value={self.state.value}
                onChange={function (value) {
                    self.setState({value: value})
                }}
            >
                <TabPane
                    icon={(<Icon type="github" />)}
                    tab="Github"
                    value="1"
                >
                    Github . . .
                </TabPane>
                <TabPane
                    icon={(<Icon type="google" />)}
                    tab="Google"
                    value="2"
                >
                    Google . . .
                </TabPane>
                <TabPane
                    icon={(<Icon type="facebook" />)}
                    tab="Facebook"
                    value="3"
                >
                    Facebook . . .
                </TabPane>
            </Tabs>
        )
    }
}
/*ONFACE-DEL*/Box = require("react-hot-loader").hot(module)(Box)
module.exports = Box
