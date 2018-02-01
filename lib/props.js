import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-tabs',
        themes: ''
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string
    }
}
