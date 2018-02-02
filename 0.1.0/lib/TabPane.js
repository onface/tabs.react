import React , { Component } from "react"
class TabPane extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {

        }
    }
    render() {
        const self = this
        return (
            <div ref="root" className={self.context.prefixClassName + '-pane'} >
                {self.props.children}
            </div>
        )
    }
}
require('./TabPane.props').default(TabPane)
export default TabPane
