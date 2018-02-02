import { Component } from "react"
import extend from "extend"
import util from "util.react"
import classNames from "classnames"
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

            compact
        ]
        if (self.props.compact) {
            rootClassName.push(`${self.props.prefixClassName}--themes-pane-compact`)
        }
        rootClassName = rootClassName.join(' ')
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
                                    return (
                                        <span
                                            className={classNames({
                                                [`${self.props.prefixClassName}-bar-nav-tab`]: true,
                                                [`${self.props.prefixClassName}-bar-nav-tab--on`]: item.props.value === self.props.value,
                                                [`${self.props.prefixClassName}-bar-nav-tab--icon`]: item.props.icon,
                                                [`${self.props.prefixClassName}-bar-nav-tab--remove`]: item.props.remove,
                                            })}
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
                                            {
                                                item.props.remove?
                                                (
                                                    <span
                                                        className={`${self.props.prefixClassName}-bar-nav-tab-remove`}
                                                        onClick={function (e) {
                                                            e.stopPropagation()
                                                            self.props.onRemove(item.props.value)
                                                        }}
                                                    >
                                                        {
                                                            item.props.remove !== true?
                                                            item.props.remove:
                                                            (
                                                                <span>&times;</span>
                                                            )
                                                        }
                                                    </span>
                                                ):null
                                            }
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
