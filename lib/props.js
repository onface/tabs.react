import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-tabs',
        themes: 'simple',
        // value: '',
        compact: false,
        onChange: function () {

        }
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string,
        value: p.string,
        onChange: p.func,
        compact: p.bool
    }
    app.childContextTypes = {
        prefixClassName: p.string
    }
}
