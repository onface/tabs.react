import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        tab: ''
    }
    app.propTypes = {
        tab: p.oneOfType([p.string, p.element]),
        value: p.string,
        icon: p.element,
        remove: p.oneOfType([p.bool, p.element])
    }
    app.contextTypes = {
        prefixClassName: p.string
    }
}
