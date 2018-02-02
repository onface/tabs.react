import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-tabs',
        themes: 'simple',
        // value: '',
        onChange: function () {

        }
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string,
        value: p.string,
        onChange: p.func
    }
    app.childContextTypes = {
        prefixClassName: p.string
    }
}
