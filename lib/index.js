import { Component } from "react"
import extend from "extend"
import util from "util.react"
require('./index.css')
import TabPane from "./TabPane"
class Tabs extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
    }
    static TabPane = TabPane
    getChildContext () {
        return {
            prefixClassName: this.props.prefixClassName
        }
    }
    render() {
        const self = this
        var rootClassName = [
            self.props.prefixClassName,
            util.themes(self.props),
        ].join(' ')
        return (
            <div
                ref="root"
                className={rootClassName}
            >
                <div className={`${self.props.prefixClassName}-bar`}>
                   <div className={`${self.props.prefixClassName}-F-scroll`}>
                       <div className={`${self.props.prefixClassName}-bar-nav`}>
                            {
                                self.props.children.map(function (item, key) {
                                    var onClassName = ''
                                    if (item.props.value === self.props.value) {
                                        onClassName = `${self.props.prefixClassName}-bar-nav-tab--on`
                                    }
                                    var iconClassName = ''
                                    if (item.props.icon) {
                                        iconClassName = `${self.props.prefixClassName}-bar-nav-tab--icon`
                                    }
                                    return (
                                        <span
                                            className={`${self.props.prefixClassName}-bar-nav-tab ${onClassName} ${iconClassName}`}
                                            key={key}
                                            onClick={function() {
                                                self.props.onChange(item.props.value)
                                            }}
                                        >
                                            {
                                                item.props.icon?
                                                (
                                                    <span className={`${self.props.prefixClassName}-bar-nav-tab-icon`} >
                                                        {item.props.icon}
                                                    </span>
                                                ):null
                                            }
                                            {item.props.tab}
                                        </span>
                                    )
                                })
                            }
                       </div>
                   </div>
               </div>
                {self.props.children.filter(function (item) {
                    return item.props.value === self.props.value
                })}
            </div>
        )
    }
}
require('./props').default(Tabs)
export default Tabs
module.exports = Tabs
