exports.success = (req, res, header, message)=>{
    res.status(header || 200).send({
        body: message
    })
}

exports.error = (req, res, header, message, details)=>{
    console.log('[Response error] - ', details)
 
    res.status(header || 500).send({
        message,
        error: details
    })
}
