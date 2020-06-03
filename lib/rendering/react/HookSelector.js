module.exports = {
    'link': require('./hooks/link'),
    'genetic-production': require('./hooks/process'),
    'inhibition': require('./hooks/inhibition'),
    'stimulation': require('./hooks/stimulation'),
    'degradation': require('./hooks/degradation'),
    'control': require('./hooks/control')
}